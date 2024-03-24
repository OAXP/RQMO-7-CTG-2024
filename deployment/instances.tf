variable "ssh_keypair_name" {
  type = string
}

variable "ssh_keypair_public_key" {
  type = string
  
}

variable "ovh_instance_flavor" {
  type = string
  default = "b3-16"
}

variable "ovh_instance_image" {
  type = string
  default = "Ubuntu 22.04"
}

variable "domain_zone" {
  type = string
}

resource "openstack_compute_keypair_v2" "ssh_keypair" {
  provider   = openstack.ovh
  name       = var.ssh_keypair_name
  public_key = var.ssh_keypair_public_key
}

resource "openstack_compute_instance_v2" "rqmo7_instance" {
  name        = "rqmo7"
  flavor_name = var.ovh_instance_flavor
  image_name  = var.ovh_instance_image
  provider    = openstack.ovh
  key_pair    = openstack_compute_keypair_v2.ssh_keypair.name
  # TODO: Define proper security groups

  network {
    name = "Ext-Net"
  }
}

resource "ovh_domain_zone_record" "test" {
  zone      = var.domain_zone
  subdomain = "api"
  fieldtype = "A"
  target    = openstack_compute_instance_v2.rqmo7_instance.access_ip_v4
  ttl       = 3600
}
