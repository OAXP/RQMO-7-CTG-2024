resource "ansible_host" "rqmo-ansible" {
  name   = "deploy rqmo"
  groups = ["toDeploy"]
  variables = {
    ansible_host      = openstack_compute_instance_v2.rqmo7_instance.network.0.fixed_ip_v4
    ansible_user      = "ubuntu"
    private_interface = "ens3"
    public_interface  = "ens4"
  }
}
