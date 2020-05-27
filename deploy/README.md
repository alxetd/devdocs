## Local requirements

Install packages
- python
- ansible

Edit ~/.ssh/config file
```text
Host cod3labs.com
  ForwardAgent yes
```

Add ssh key to ssh agent
```bash
ssh-add ~/.ssh/id_rsa
```

Install roles
```bash
cd deploy
ansible-galaxy install -r requirements.yml
```

Tags
```bash
system, apache, nginx, mysql, project
```

# Playbook commands
ansible-playbook -l [target] -i [inventory file] -t [tags] -u [remote user] playbook.yml

## Prod
```bash
ansible-playbook -i ./environments/prod/hosts playbooks/prod-provision.yml # No need for now
ansible-playbook -i ./environments/prod/hosts playbooks/prod-configure.yml
ansible-playbook -i ./environments/prod/hosts playbooks/prod-deploy.yml
```

## Stage
```bash
ansible-playbook -i ./environments/stage/hosts playbooks/stage-provision.yml # No need for now
ansible-playbook -i ./environments/stage/hosts playbooks/stage-configure.yml
ansible-playbook -i ./environments/stage/hosts playbooks/stage-deploy.yml
```

## Local
```bash
ansible-playbook -i ./environments/local/hosts playbooks/stage-provision.yml # No need for now
ansible-playbook -i ./environments/local/hosts playbooks/stage-configure.yml
ansible-playbook -i ./environments/local/hosts playbooks/stage-deploy.yml
```

# Ansible ad-hoc commands
ansible [group] -i [inventory file] -u [remote user] -m [module]

```bash
ansible-inventory --list -y
```

```bash
ansible -i ./environments/local/hosts web -m command -a 'uptime'
ansible -i ./environments/local/hosts web -m setup
```

# General commands
## Certbot
```bash
certbot certificates # Show certificates
ls /etc/letsencrypt/live/cod3labs.com
```

## Firewall
```bash
service firewall [start|stop|restart|status]
```

```bash
sudo netstat -ltup
```

```bash
iptables --list
```

## Nginx
```bash
nginx -t # Check syntax
```

```bash
sudo systemctl reload nginx # Reload web server
```

## Php
```bash
sudo service php7.4-fpm [start|stop|restart|status]
ps aux |grep cod3labs # Verify pool is properly running by searching for its processes
```

## Logs
```bash
tail -f /var/www/cod3labs/logs/*
tail -f /var/log/nginx/*
```
