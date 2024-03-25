variable "ovh_application_key" {
  type = string
}

variable "ovh_application_secret" {
  type = string
}

variable "ovh_consumer_key" {
  type = string
}

# Define providers and set versions
terraform {
  required_version = ">= 0.14.0" # Takes into account Terraform versions from 0.14.0
  required_providers {
    openstack = {
      source  = "terraform-provider-openstack/openstack"
      version = "~> 1.42.0"
    }

    ansible = {
      version = "~> 1.1.0"
      source  = "ansible/ansible"
    }

    ovh = {
      source  = "ovh/ovh"
      version = ">= 0.13.0"
    }
  }
}

# Configure the OpenStack provider hosted by OVHcloud
provider "openstack" {
  auth_url    = "https://auth.cloud.ovh.net/v3/"
  domain_name = "default"
  alias       = "ovh"
  region      = "BHS5"
}



provider "ovh" {
  alias              = "ovh"
  endpoint           = "ovh-ca"
  application_key    = var.ovh_application_key
  application_secret = var.ovh_application_key
  consumer_key       = var.ovh_consumer_key
}
