# How to deploy 

## Requirements 
- Terraform 
- Ansible 

At the moment, it is deployed to OVH's Openstack but can easily be moved to aws or Azure Google Cloud etc,.... 

## How to 
```sh
terraform init 
terraform plan 
terraform apply
```

```sh
ansible-playbook -i inventory.yaml ./playbook.yml
```
