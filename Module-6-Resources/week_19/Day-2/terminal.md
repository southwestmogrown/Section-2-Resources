shane@DESKTOP-12EQ7ND:~$ docker container run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

shane@DESKTOP-12EQ7ND:~$ docker container run [flags] image-name [COMMAND] [ARG...]
docker: invalid reference format.
See 'docker run --help'.
shane@DESKTOP-12EQ7ND:~$ docker container run --name my_first_container -p 8080:80 nginx
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2024/05/14 15:14:04 [notice] 1#1: using the "epoll" event method
2024/05/14 15:14:04 [notice] 1#1: nginx/1.25.5
2024/05/14 15:14:04 [notice] 1#1: built by gcc 12.2.0 (Debian 12.2.0-14)
2024/05/14 15:14:04 [notice] 1#1: OS: Linux 5.15.146.1-microsoft-standard-WSL2
2024/05/14 15:14:04 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576
2024/05/14 15:14:04 [notice] 1#1: start worker processes
2024/05/14 15:14:04 [notice] 1#1: start worker process 29
2024/05/14 15:14:04 [notice] 1#1: start worker process 30
2024/05/14 15:14:04 [notice] 1#1: start worker process 31
2024/05/14 15:14:04 [notice] 1#1: start worker process 32
2024/05/14 15:14:04 [notice] 1#1: start worker process 33
2024/05/14 15:14:04 [notice] 1#1: start worker process 34
2024/05/14 15:14:04 [notice] 1#1: start worker process 35
2024/05/14 15:14:04 [notice] 1#1: start worker process 36
2024/05/14 15:14:04 [notice] 1#1: start worker process 37
2024/05/14 15:14:04 [notice] 1#1: start worker process 38
2024/05/14 15:14:04 [notice] 1#1: start worker process 39
2024/05/14 15:14:04 [notice] 1#1: start worker process 40
2024/05/14 15:14:04 [notice] 1#1: start worker process 41
2024/05/14 15:14:04 [notice] 1#1: start worker process 42
2024/05/14 15:14:04 [notice] 1#1: start worker process 43
2024/05/14 15:14:04 [notice] 1#1: start worker process 44
2024/05/14 15:14:04 [notice] 1#1: start worker process 45
2024/05/14 15:14:04 [notice] 1#1: start worker process 46
2024/05/14 15:14:04 [notice] 1#1: start worker process 47
2024/05/14 15:14:04 [notice] 1#1: start worker process 48
2024/05/14 15:14:04 [notice] 1#1: start worker process 49
2024/05/14 15:14:04 [notice] 1#1: start worker process 50
2024/05/14 15:14:04 [notice] 1#1: start worker process 51
2024/05/14 15:14:04 [notice] 1#1: start worker process 52
172.17.0.1 - - [14/May/2024:15:14:21 +0000] "GET / HTTP/1.1" 200 615 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" "-"
2024/05/14 15:14:21 [error] 29#29: *2 open() "/usr/share/nginx/html/favicon.ico" failed (2: No such file or directory), client: 172.17.0.1, server: localhost, request: "GET /favicon.ico HTTP/1.1", host: "localhost:8080", referrer: "http://localhost:8080/"
172.17.0.1 - - [14/May/2024:15:14:21 +0000] "GET /favicon.ico HTTP/1.1" 404 555 "http://localhost:8080/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" "-"
^C2024/05/14 15:14:54 [notice] 1#1: signal 2 (SIGINT) received, exiting
2024/05/14 15:14:54 [notice] 29#29: exiting
2024/05/14 15:14:54 [notice] 30#30: exiting
2024/05/14 15:14:54 [notice] 31#31: exiting
2024/05/14 15:14:54 [notice] 31#31: exit
2024/05/14 15:14:54 [notice] 29#29: exit
2024/05/14 15:14:54 [notice] 39#39: exiting
2024/05/14 15:14:54 [notice] 35#35: exiting
2024/05/14 15:14:54 [notice] 38#38: exiting
2024/05/14 15:14:54 [notice] 30#30: exit
2024/05/14 15:14:54 [notice] 34#34: exiting
2024/05/14 15:14:54 [notice] 39#39: exit
2024/05/14 15:14:54 [notice] 35#35: exit
2024/05/14 15:14:54 [notice] 38#38: exit
2024/05/14 15:14:54 [notice] 37#37: exiting
2024/05/14 15:14:54 [notice] 36#36: exiting
2024/05/14 15:14:54 [notice] 43#43: exiting
2024/05/14 15:14:54 [notice] 40#40: exiting
2024/05/14 15:14:54 [notice] 45#45: exiting
2024/05/14 15:14:54 [notice] 36#36: exit
2024/05/14 15:14:54 [notice] 43#43: exit
2024/05/14 15:14:54 [notice] 34#34: exit
2024/05/14 15:14:54 [notice] 37#37: exit
2024/05/14 15:14:54 [notice] 40#40: exit
2024/05/14 15:14:54 [notice] 49#49: exiting
2024/05/14 15:14:54 [notice] 45#45: exit
2024/05/14 15:14:54 [notice] 52#52: exiting
2024/05/14 15:14:54 [notice] 47#47: exiting
2024/05/14 15:14:54 [notice] 42#42: exiting
2024/05/14 15:14:54 [notice] 44#44: exiting
2024/05/14 15:14:54 [notice] 50#50: exiting
2024/05/14 15:14:54 [notice] 41#41: exiting
2024/05/14 15:14:54 [notice] 32#32: exiting
2024/05/14 15:14:54 [notice] 51#51: exiting
2024/05/14 15:14:54 [notice] 42#42: exit
2024/05/14 15:14:54 [notice] 44#44: exit
2024/05/14 15:14:54 [notice] 52#52: exit
2024/05/14 15:14:54 [notice] 47#47: exit
2024/05/14 15:14:54 [notice] 49#49: exit
2024/05/14 15:14:54 [notice] 50#50: exit
2024/05/14 15:14:54 [notice] 41#41: exit
2024/05/14 15:14:54 [notice] 32#32: exit
2024/05/14 15:14:54 [notice] 51#51: exit
2024/05/14 15:14:54 [notice] 33#33: exiting
2024/05/14 15:14:54 [notice] 33#33: exit
2024/05/14 15:14:54 [notice] 46#46: exiting
2024/05/14 15:14:54 [notice] 46#46: exit
2024/05/14 15:14:54 [notice] 48#48: exiting
2024/05/14 15:14:54 [notice] 48#48: exit
2024/05/14 15:14:54 [notice] 1#1: signal 14 (SIGALRM) received
2024/05/14 15:14:54 [notice] 1#1: signal 17 (SIGCHLD) received from 33
2024/05/14 15:14:54 [notice] 1#1: worker process 33 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: worker process 38 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: signal 29 (SIGIO) received
2024/05/14 15:14:54 [notice] 1#1: signal 17 (SIGCHLD) received from 38
2024/05/14 15:14:54 [notice] 1#1: signal 17 (SIGCHLD) received from 51
2024/05/14 15:14:54 [notice] 1#1: worker process 32 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: worker process 35 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: worker process 36 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: worker process 42 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: worker process 43 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: worker process 46 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: worker process 50 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: worker process 51 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: signal 29 (SIGIO) received
2024/05/14 15:14:54 [notice] 1#1: signal 17 (SIGCHLD) received from 39
2024/05/14 15:14:54 [notice] 1#1: worker process 30 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: worker process 39 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: worker process 41 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: signal 29 (SIGIO) received
2024/05/14 15:14:54 [notice] 1#1: signal 17 (SIGCHLD) received from 49
2024/05/14 15:14:54 [notice] 1#1: worker process 37 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: worker process 45 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: worker process 49 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: signal 29 (SIGIO) received
2024/05/14 15:14:54 [notice] 1#1: signal 17 (SIGCHLD) received from 52
2024/05/14 15:14:54 [notice] 1#1: worker process 29 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: worker process 47 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: worker process 52 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: signal 29 (SIGIO) received
2024/05/14 15:14:54 [notice] 1#1: signal 17 (SIGCHLD) received from 44
2024/05/14 15:14:54 [notice] 1#1: worker process 44 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: signal 29 (SIGIO) received
2024/05/14 15:14:54 [notice] 1#1: signal 17 (SIGCHLD) received from 34
2024/05/14 15:14:54 [notice] 1#1: worker process 34 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: signal 29 (SIGIO) received
2024/05/14 15:14:54 [notice] 1#1: signal 17 (SIGCHLD) received from 31
2024/05/14 15:14:54 [notice] 1#1: worker process 31 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: signal 29 (SIGIO) received
2024/05/14 15:14:54 [notice] 1#1: signal 17 (SIGCHLD) received from 48
2024/05/14 15:14:54 [notice] 1#1: worker process 40 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: worker process 48 exited with code 0
2024/05/14 15:14:54 [notice] 1#1: exit


shane@DESKTOP-12EQ7ND:~$ docker container ls
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
shane@DESKTOP-12EQ7ND:~$ docker container ls -a
CONTAINER ID   IMAGE         COMMAND                  CREATED              STATUS                          PORTS     NAMES
32ff4d2bb6fa   nginx         "/docker-entrypoint.…"   About a minute ago   Exited (0) About a minute ago             my_first_container
9d7c0fcc21fe   hello-world   "/hello"                 6 minutes ago        Exited (0) 6 minutes ago                  quizzical_montalcini
shane@DESKTOP-12EQ7ND:~$ docker container run -d -p 8000:80 nginx
f369a254436461da7dc8c95ab9064c6d88e0398eaa884580e03a111e9575607d
shane@DESKTOP-12EQ7ND:~$ docker container run -it -p 8080:80 nginx sh
# ls
bin  boot  dev  docker-entrypoint.d  docker-entrypoint.sh  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
# cd usr
# ls
bin  games  include  lib  lib64  libexec  local  sbin  share  src
# cd share
# ls
X11              bug              debianutils  dpkg        gdb       libc-bin     man         nginx        pixmaps   util-linux
base-files       ca-certificates  dict         fontconfig  info      libgcrypt20  maven-repo  pam          polkit-1  xml
base-passwd      common-licenses  doc          fonts       java      lintian      menu        pam-configs  tabset    zoneinfo
bash-completion  debconf          doc-base     gcc         keyrings  locale       misc        perl5        terminfo  zsh
# cd nginx
# ls
html
# cd html
# ls
50x.html  index.html
# nano index.html
sh: 10: nano: not found
# apk add nano
sh: 11: apk: not found
# exit
shane@DESKTOP-12EQ7ND:~$ docker container ls
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                  NAMES
f369a2544364   nginx     "/docker-entrypoint.…"   3 minutes ago   Up 3 minutes   0.0.0.0:8000->80/tcp   vigorous_bardeen
shane@DESKTOP-12EQ7ND:~$ docker container run --rm -it nginx sh
# ls
bin  boot  dev  docker-entrypoint.d  docker-entrypoint.sh  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
# exit
shane@DESKTOP-12EQ7ND:~$ docker container ls -a
CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS                            PORTS                  NAMES
65233882121b   nginx         "/docker-entrypoint.…"   2 minutes ago    Exited (127) About a minute ago                          frosty_perlman
f369a2544364   nginx         "/docker-entrypoint.…"   4 minutes ago    Up 4 minutes                      0.0.0.0:8000->80/tcp   vigorous_bardeen
32ff4d2bb6fa   nginx         "/docker-entrypoint.…"   7 minutes ago    Exited (0) 6 minutes ago                                 my_first_container
9d7c0fcc21fe   hello-world   "/hello"                 12 minutes ago   Exited (0) 12 minutes ago                                quizzical_montalcini
shane@DESKTOP-12EQ7ND:~$ docker container run --rm -it nginx sh
# exit
shane@DESKTOP-12EQ7ND:~$ docker container ls -a
CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS                            PORTS                  NAMES
65233882121b   nginx         "/docker-entrypoint.…"   2 minutes ago    Exited (127) About a minute ago                          frosty_perlman
f369a2544364   nginx         "/docker-entrypoint.…"   4 minutes ago    Up 4 minutes                      0.0.0.0:8000->80/tcp   vigorous_bardeen
32ff4d2bb6fa   nginx         "/docker-entrypoint.…"   8 minutes ago    Exited (0) 7 minutes ago                                 my_first_container
9d7c0fcc21fe   hello-world   "/hello"                 13 minutes ago   Exited (0) 13 minutes ago                                quizzical_montalcini
shane@DESKTOP-12EQ7ND:~$ docker container run -it -p 8080:80 nginx:alpine3.19
Unable to find image 'nginx:alpine3.19' locally
alpine3.19: Pulling from library/nginx
Digest: sha256:516475cc129da42866742567714ddc681e5eed7b9ee0b9e9c015e464b4221a00
Status: Downloaded newer image for nginx:alpine3.19
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2024/05/14 15:24:56 [notice] 1#1: using the "epoll" event method
2024/05/14 15:24:56 [notice] 1#1: nginx/1.25.5
2024/05/14 15:24:56 [notice] 1#1: built by gcc 13.2.1 20231014 (Alpine 13.2.1_git20231014)
2024/05/14 15:24:56 [notice] 1#1: OS: Linux 5.15.146.1-microsoft-standard-WSL2
2024/05/14 15:24:56 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576
2024/05/14 15:24:56 [notice] 1#1: start worker processes
2024/05/14 15:24:56 [notice] 1#1: start worker process 30
2024/05/14 15:24:56 [notice] 1#1: start worker process 31
2024/05/14 15:24:56 [notice] 1#1: start worker process 32
2024/05/14 15:24:56 [notice] 1#1: start worker process 33
2024/05/14 15:24:56 [notice] 1#1: start worker process 34
2024/05/14 15:24:56 [notice] 1#1: start worker process 35
2024/05/14 15:24:56 [notice] 1#1: start worker process 36
2024/05/14 15:24:56 [notice] 1#1: start worker process 37
2024/05/14 15:24:56 [notice] 1#1: start worker process 38
2024/05/14 15:24:56 [notice] 1#1: start worker process 39
2024/05/14 15:24:56 [notice] 1#1: start worker process 40
2024/05/14 15:24:56 [notice] 1#1: start worker process 41
2024/05/14 15:24:56 [notice] 1#1: start worker process 42
2024/05/14 15:24:56 [notice] 1#1: start worker process 43
2024/05/14 15:24:56 [notice] 1#1: start worker process 44
2024/05/14 15:24:56 [notice] 1#1: start worker process 45
2024/05/14 15:24:56 [notice] 1#1: start worker process 46
2024/05/14 15:24:56 [notice] 1#1: start worker process 47
2024/05/14 15:24:56 [notice] 1#1: start worker process 48
2024/05/14 15:24:56 [notice] 1#1: start worker process 49
2024/05/14 15:24:56 [notice] 1#1: start worker process 50
2024/05/14 15:24:56 [notice] 1#1: start worker process 51
2024/05/14 15:24:56 [notice] 1#1: start worker process 52
2024/05/14 15:24:56 [notice] 1#1: start worker process 53
^C2024/05/14 15:25:07 [notice] 52#52: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 1#1: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 51#51: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 52#52: exiting
2024/05/14 15:25:07 [notice] 50#50: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 51#51: exiting
2024/05/14 15:25:07 [notice] 50#50: exiting
2024/05/14 15:25:07 [notice] 53#53: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 53#53: exiting
2024/05/14 15:25:07 [notice] 49#49: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 49#49: exiting
2024/05/14 15:25:07 [notice] 51#51: exit
2024/05/14 15:25:07 [notice] 52#52: exit
2024/05/14 15:25:07 [notice] 50#50: exit
2024/05/14 15:25:07 [notice] 53#53: exit
2024/05/14 15:25:07 [notice] 49#49: exit
2024/05/14 15:25:07 [notice] 48#48: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 47#47: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 48#48: exiting
2024/05/14 15:25:07 [notice] 47#47: exiting
2024/05/14 15:25:07 [notice] 46#46: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 47#47: exit
2024/05/14 15:25:07 [notice] 48#48: exit
2024/05/14 15:25:07 [notice] 46#46: exiting
2024/05/14 15:25:07 [notice] 45#45: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 44#44: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 45#45: exiting
2024/05/14 15:25:07 [notice] 43#43: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 44#44: exiting
2024/05/14 15:25:07 [notice] 46#46: exit
2024/05/14 15:25:07 [notice] 43#43: exiting
2024/05/14 15:25:07 [notice] 42#42: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 45#45: exit
2024/05/14 15:25:07 [notice] 41#41: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 42#42: exiting
2024/05/14 15:25:07 [notice] 44#44: exit
2024/05/14 15:25:07 [notice] 40#40: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 41#41: exiting
2024/05/14 15:25:07 [notice] 40#40: exiting
2024/05/14 15:25:07 [notice] 39#39: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 38#38: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 39#39: exiting
2024/05/14 15:25:07 [notice] 43#43: exit
2024/05/14 15:25:07 [notice] 37#37: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 38#38: exiting
2024/05/14 15:25:07 [notice] 36#36: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 36#36: exiting
2024/05/14 15:25:07 [notice] 35#35: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 37#37: exiting
2024/05/14 15:25:07 [notice] 42#42: exit
2024/05/14 15:25:07 [notice] 34#34: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 41#41: exit
2024/05/14 15:25:07 [notice] 35#35: exiting
2024/05/14 15:25:07 [notice] 33#33: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 34#34: exiting
2024/05/14 15:25:07 [notice] 40#40: exit
2024/05/14 15:25:07 [notice] 32#32: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 33#33: exiting
2024/05/14 15:25:07 [notice] 31#31: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 32#32: exiting
2024/05/14 15:25:07 [notice] 31#31: exiting
2024/05/14 15:25:07 [notice] 39#39: exit
2024/05/14 15:25:07 [notice] 30#30: signal 2 (SIGINT) received, exiting
2024/05/14 15:25:07 [notice] 30#30: exiting
2024/05/14 15:25:07 [notice] 38#38: exit
2024/05/14 15:25:07 [notice] 36#36: exit
2024/05/14 15:25:07 [notice] 37#37: exit
2024/05/14 15:25:07 [notice] 34#34: exit
2024/05/14 15:25:07 [notice] 35#35: exit
2024/05/14 15:25:07 [notice] 32#32: exit
2024/05/14 15:25:07 [notice] 33#33: exit
2024/05/14 15:25:07 [notice] 30#30: exit
2024/05/14 15:25:07 [notice] 31#31: exit
2024/05/14 15:25:07 [notice] 1#1: signal 14 (SIGALRM) received
2024/05/14 15:25:07 [notice] 1#1: signal 17 (SIGCHLD) received from 53
2024/05/14 15:25:07 [notice] 1#1: worker process 34 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 30 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 32 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 36 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 39 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 41 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 52 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 53 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: signal 29 (SIGIO) received
2024/05/14 15:25:07 [notice] 1#1: signal 17 (SIGCHLD) received from 52
2024/05/14 15:25:07 [notice] 1#1: signal 17 (SIGCHLD) received from 50
2024/05/14 15:25:07 [notice] 1#1: worker process 33 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 47 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 49 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 50 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: signal 29 (SIGIO) received
2024/05/14 15:25:07 [notice] 1#1: signal 17 (SIGCHLD) received from 49
2024/05/14 15:25:07 [notice] 1#1: signal 17 (SIGCHLD) received from 35
2024/05/14 15:25:07 [notice] 1#1: worker process 35 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 42 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 43 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: signal 29 (SIGIO) received
2024/05/14 15:25:07 [notice] 1#1: signal 17 (SIGCHLD) received from 42
2024/05/14 15:25:07 [notice] 1#1: signal 17 (SIGCHLD) received from 45
2024/05/14 15:25:07 [notice] 1#1: worker process 40 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 38 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 44 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 45 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: signal 29 (SIGIO) received
2024/05/14 15:25:07 [notice] 1#1: signal 17 (SIGCHLD) received from 38
2024/05/14 15:25:07 [notice] 1#1: signal 17 (SIGCHLD) received from 48
2024/05/14 15:25:07 [notice] 1#1: worker process 46 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 48 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: signal 29 (SIGIO) received
2024/05/14 15:25:07 [notice] 1#1: signal 17 (SIGCHLD) received from 46
2024/05/14 15:25:07 [notice] 1#1: signal 17 (SIGCHLD) received from 37
2024/05/14 15:25:07 [notice] 1#1: worker process 37 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 31 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: worker process 51 exited with code 0
2024/05/14 15:25:07 [notice] 1#1: exit
shane@DESKTOP-12EQ7ND:~$ docker container ls -a
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS                       PORTS                  NAMES
4c98f87a311f   nginx:alpine3.19   "/docker-entrypoint.…"   20 seconds ago   Exited (0) 7 seconds ago                            affectionate_wright
65233882121b   nginx              "/docker-entrypoint.…"   5 minutes ago    Exited (127) 4 minutes ago                          frosty_perlman
f369a2544364   nginx              "/docker-entrypoint.…"   7 minutes ago    Up 7 minutes                 0.0.0.0:8000->80/tcp   vigorous_bardeen
32ff4d2bb6fa   nginx              "/docker-entrypoint.…"   11 minutes ago   Exited (0) 10 minutes ago                           my_first_container
9d7c0fcc21fe   hello-world        "/hello"                 16 minutes ago   Exited (0) 16 minutes ago                           quizzical_montalcini
shane@DESKTOP-12EQ7ND:~$ docker container ls -a
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS                       PORTS                  NAMES
4c98f87a311f   nginx:alpine3.19   "/docker-entrypoint.…"   28 seconds ago   Exited (0) 16 seconds ago                           affectionate_wright
65233882121b   nginx              "/docker-entrypoint.…"   5 minutes ago    Exited (127) 4 minutes ago                          frosty_perlman
f369a2544364   nginx              "/docker-entrypoint.…"   7 minutes ago    Up 7 minutes                 0.0.0.0:8000->80/tcp   vigorous_bardeen
32ff4d2bb6fa   nginx              "/docker-entrypoint.…"   11 minutes ago   Exited (0) 10 minutes ago                           my_first_container
9d7c0fcc21fe   hello-world        "/hello"                 16 minutes ago   Exited (0) 16 minutes ago                           quizzical_montalcini
shane@DESKTOP-12EQ7ND:~$ docker container run -it -p 8080:80 nginx:alpine3.19 sh
/ # ls
bin                   etc                   mnt                   run                   tmp
dev                   home                  opt                   sbin                  usr
docker-entrypoint.d   lib                   proc                  srv                   var
docker-entrypoint.sh  media                 root                  sys
/ # cd usr
/usr # ls
bin    lib    local  sbin   share
/usr # cd share/
/usr/share # ls
GeoIP            apk              doc              licenses         misc             udhcpc           zoneinfo
X11              ca-certificates  fontconfig       man              nginx            xml
/usr/share # cd nginx/
/usr/share/nginx # ls
html
/usr/share/nginx # cd html/
/usr/share/nginx/html # ls
50x.html    index.html
/usr/share/nginx/html # nano index.html
sh: nano: not found
/usr/share/nginx/html # apk add nano
fetch https://dl-cdn.alpinelinux.org/alpine/v3.19/main/x86_64/APKINDEX.tar.gz
fetch https://dl-cdn.alpinelinux.org/alpine/v3.19/community/x86_64/APKINDEX.tar.gz
(1/1) Installing nano (7.2-r1)
Executing busybox-1.36.1-r15.trigger
OK: 46 MiB in 67 packages
/usr/share/nginx/html # nano index.html
/usr/share/nginx/html # exit
shane@DESKTOP-12EQ7ND:~$ docker container ls -a
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS                       PORTS                  NAMES
85286f3931db   nginx:alpine3.19   "/docker-entrypoint.…"   2 minutes ago    Exited (0) 10 seconds ago                           nice_kapitsa
4c98f87a311f   nginx:alpine3.19   "/docker-entrypoint.…"   3 minutes ago    Exited (0) 2 minutes ago                            affectionate_wright
65233882121b   nginx              "/docker-entrypoint.…"   8 minutes ago    Exited (127) 7 minutes ago                          frosty_perlman
f369a2544364   nginx              "/docker-entrypoint.…"   10 minutes ago   Up 10 minutes                0.0.0.0:8000->80/tcp   vigorous_bardeen
32ff4d2bb6fa   nginx              "/docker-entrypoint.…"   13 minutes ago   Exited (0) 13 minutes ago                           my_first_container
9d7c0fcc21fe   hello-world        "/hello"                 18 minutes ago   Exited (0) 18 minutes ago                           quizzical_montalcini
shane@DESKTOP-12EQ7ND:~$ docker container run nice_kapitsa
Unable to find image 'nice_kapitsa:latest' locally
docker: Error response from daemon: pull access denied for nice_kapitsa, repository does not exist or may require 'docker login': denied: requested access to the resource is denied.
See 'docker run --help'.
shane@DESKTOP-12EQ7ND:~$ docker container run -p 8080:80 --name our-container -d nginx:alpine3.19
ff330455c7582056be3565f4af95b3eea48d9a3166de948f7953176c0d1e7edb

shane@DESKTOP-12EQ7ND:~$ docker container run -p 8081:80 -d nginx
46f3ff7168c3213e8cb9cb0863994e75d408354d993ce3ec5ce659ed2d12505b
shane@DESKTOP-12EQ7ND:~$ docker container ls
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS          PORTS                  NAMES
46f3ff7168c3   nginx              "/docker-entrypoint.…"   34 seconds ago   Up 33 seconds   0.0.0.0:8081->80/tcp   affectionate_knuth
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   3 minutes ago    Up 3 minutes    0.0.0.0:8080->80/tcp   our-container
f369a2544364   nginx              "/docker-entrypoint.…"   15 minutes ago   Up 15 minutes   0.0.0.0:8000->80/tcp   vigorous_bardeen
shane@DESKTOP-12EQ7ND:~$ docker container stop affectionate_knuth
affectionate_knuth
shane@DESKTOP-12EQ7ND:~$ docker container ls
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS          PORTS                  NAMES
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   4 minutes ago    Up 4 minutes    0.0.0.0:8080->80/tcp   our-container
f369a2544364   nginx              "/docker-entrypoint.…"   16 minutes ago   Up 16 minutes   0.0.0.0:8000->80/tcp   vigorous_bardeen
shane@DESKTOP-12EQ7ND:~$ docker container ls -a
CONTAINER ID   IMAGE              COMMAND                  CREATED              STATUS                        PORTS                  NAMES
46f3ff7168c3   nginx              "/docker-entrypoint.…"   About a minute ago   Exited (0) 13 seconds ago                            affectionate_knuth
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   4 minutes ago        Up 4 minutes                  0.0.0.0:8080->80/tcp   our-container
85286f3931db   nginx:alpine3.19   "/docker-entrypoint.…"   8 minutes ago        Exited (0) 6 minutes ago                             nice_kapitsa
4c98f87a311f   nginx:alpine3.19   "/docker-entrypoint.…"   9 minutes ago        Exited (0) 8 minutes ago                             affectionate_wright
65233882121b   nginx              "/docker-entrypoint.…"   14 minutes ago       Exited (127) 13 minutes ago                          frosty_perlman
f369a2544364   nginx              "/docker-entrypoint.…"   16 minutes ago       Up 16 minutes                 0.0.0.0:8000->80/tcp   vigorous_bardeen
32ff4d2bb6fa   nginx              "/docker-entrypoint.…"   19 minutes ago       Exited (0) 19 minutes ago                            my_first_container
9d7c0fcc21fe   hello-world        "/hello"                 24 minutes ago       Exited (0) 24 minutes ago                            quizzical_montalcini
shane@DESKTOP-12EQ7ND:~$ docker container run -it --name test alpine sh
/ # ls
bin    dev    etc    home   lib    media  mnt    opt    proc   root   run    sbin   srv    sys    tmp    usr    var
/ # exit
shane@DESKTOP-12EQ7ND:~$ docker container ls -a
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS                        PORTS                  NAMES
a51dede3dde3   alpine             "sh"                     21 seconds ago   Exited (0) 4 seconds ago                             test
46f3ff7168c3   nginx              "/docker-entrypoint.…"   4 minutes ago    Exited (0) 2 minutes ago                             affectionate_knuth
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   6 minutes ago    Up 6 minutes                  0.0.0.0:8080->80/tcp   our-container
85286f3931db   nginx:alpine3.19   "/docker-entrypoint.…"   11 minutes ago   Exited (0) 8 minutes ago                             nice_kapitsa
4c98f87a311f   nginx:alpine3.19   "/docker-entrypoint.…"   11 minutes ago   Exited (0) 11 minutes ago                            affectionate_wright
65233882121b   nginx              "/docker-entrypoint.…"   17 minutes ago   Exited (127) 16 minutes ago                          frosty_perlman
f369a2544364   nginx              "/docker-entrypoint.…"   19 minutes ago   Up 19 minutes                 0.0.0.0:8000->80/tcp   vigorous_bardeen
32ff4d2bb6fa   nginx              "/docker-entrypoint.…"   22 minutes ago   Exited (0) 21 minutes ago                            my_first_container
9d7c0fcc21fe   hello-world        "/hello"                 27 minutes ago   Exited (0) 27 minutes ago                            quizzical_montalcini
shane@DESKTOP-12EQ7ND:~$ docker container run --name greet_me --rm ubuntu echo hello world
hello world
shane@DESKTOP-12EQ7ND:~$ docker container ls -a
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS                          PORTS                  NAMES
a51dede3dde3   alpine             "sh"                     2 minutes ago    Exited (0) About a minute ago                          test
46f3ff7168c3   nginx              "/docker-entrypoint.…"   5 minutes ago    Exited (0) 4 minutes ago                               affectionate_knuth
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   8 minutes ago    Up 8 minutes                    0.0.0.0:8080->80/tcp   our-container
85286f3931db   nginx:alpine3.19   "/docker-entrypoint.…"   12 minutes ago   Exited (0) 10 minutes ago                              nice_kapitsa
4c98f87a311f   nginx:alpine3.19   "/docker-entrypoint.…"   13 minutes ago   Exited (0) 13 minutes ago                              affectionate_wright
65233882121b   nginx              "/docker-entrypoint.…"   18 minutes ago   Exited (127) 17 minutes ago                            frosty_perlman
f369a2544364   nginx              "/docker-entrypoint.…"   20 minutes ago   Up 20 minutes                   0.0.0.0:8000->80/tcp   vigorous_bardeen
32ff4d2bb6fa   nginx              "/docker-entrypoint.…"   24 minutes ago   Exited (0) 23 minutes ago                              my_first_container
9d7c0fcc21fe   hello-world        "/hello"                 29 minutes ago   Exited (0) 29 minutes ago                              quizzical_montalcini
shane@DESKTOP-12EQ7ND:~$


shane@DESKTOP-12EQ7ND:~$ docker container ls
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS          PORTS                  NAMES
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   9 minutes ago    Up 9 minutes    0.0.0.0:8080->80/tcp   our-container
f369a2544364   nginx              "/docker-entrypoint.…"   21 minutes ago   Up 21 minutes   0.0.0.0:8000->80/tcp   vigorous_bardeen
shane@DESKTOP-12EQ7ND:~$ docker container ls -a
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS                        PORTS                  NAMES
a51dede3dde3   alpine             "sh"                     3 minutes ago    Exited (0) 3 minutes ago                             test
46f3ff7168c3   nginx              "/docker-entrypoint.…"   7 minutes ago    Exited (0) 6 minutes ago                             affectionate_knuth
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   9 minutes ago    Up 9 minutes                  0.0.0.0:8080->80/tcp   our-container
85286f3931db   nginx:alpine3.19   "/docker-entrypoint.…"   14 minutes ago   Exited (0) 11 minutes ago                            nice_kapitsa
4c98f87a311f   nginx:alpine3.19   "/docker-entrypoint.…"   14 minutes ago   Exited (0) 14 minutes ago                            affectionate_wright
65233882121b   nginx              "/docker-entrypoint.…"   20 minutes ago   Exited (127) 19 minutes ago                          frosty_perlman
f369a2544364   nginx              "/docker-entrypoint.…"   22 minutes ago   Up 22 minutes                 0.0.0.0:8000->80/tcp   vigorous_bardeen
32ff4d2bb6fa   nginx              "/docker-entrypoint.…"   25 minutes ago   Exited (0) 24 minutes ago                            my_first_container
9d7c0fcc21fe   hello-world        "/hello"                 30 minutes ago   Exited (0) 30 minutes ago                            quizzical_montalcini
shane@DESKTOP-12EQ7ND:~$ docker image ls
REPOSITORY              TAG          IMAGE ID       CREATED         SIZE
swilkey42/my-vite-app   latest       ee67f3d5c22d   3 hours ago     386MB
postgres                latest       0e536f047d0f   4 days ago      447MB
nginx                   latest       1d668e06f1e5   10 days ago     188MB
nginx                   alpine       501d84f5d064   10 days ago     48.3MB
nginx                   alpine3.19   501d84f5d064   10 days ago     48.3MB
ubuntu                  latest       bf3dc08bfed0   2 weeks ago     76.2MB
alpine                  latest       05455a08881e   3 months ago    7.38MB
hello-world             latest       d2c94e258dcb   12 months ago   13.3kB
shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS          PORTS                  NAMES
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   10 minutes ago   Up 10 minutes   0.0.0.0:8080->80/tcp   our-container
f369a2544364   nginx              "/docker-entrypoint.…"   22 minutes ago   Up 22 minutes   0.0.0.0:8000->80/tcp   vigorous_bardeen
shane@DESKTOP-12EQ7ND:~$ docker ps -a
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS                        PORTS                  NAMES
a51dede3dde3   alpine             "sh"                     4 minutes ago    Exited (0) 3 minutes ago                             test
46f3ff7168c3   nginx              "/docker-entrypoint.…"   8 minutes ago    Exited (0) 6 minutes ago                             affectionate_knuth
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   10 minutes ago   Up 10 minutes                 0.0.0.0:8080->80/tcp   our-container
85286f3931db   nginx:alpine3.19   "/docker-entrypoint.…"   15 minutes ago   Exited (0) 12 minutes ago                            nice_kapitsa
4c98f87a311f   nginx:alpine3.19   "/docker-entrypoint.…"   15 minutes ago   Exited (0) 15 minutes ago                            affectionate_wright
65233882121b   nginx              "/docker-entrypoint.…"   21 minutes ago   Exited (127) 20 minutes ago                          frosty_perlman
f369a2544364   nginx              "/docker-entrypoint.…"   23 minutes ago   Up 23 minutes                 0.0.0.0:8000->80/tcp   vigorous_bardeen
32ff4d2bb6fa   nginx              "/docker-entrypoint.…"   26 minutes ago   Exited (0) 25 minutes ago                            my_first_container
9d7c0fcc21fe   hello-world        "/hello"                 31 minutes ago   Exited (0) 31 minutes ago                            quizzical_montalcini
shane@DESKTOP-12EQ7ND:~$ docker container start quizzical_montalcini
quizzical_montalcini
shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS          PORTS                  NAMES
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   12 minutes ago   Up 12 minutes   0.0.0.0:8080->80/tcp   our-container
f369a2544364   nginx              "/docker-entrypoint.…"   24 minutes ago   Up 24 minutes   0.0.0.0:8000->80/tcp   vigorous_bardeen
shane@DESKTOP-12EQ7ND:~$ docker container start my_first_container
Error response from daemon: driver failed programming external connectivity on endpoint my_first_container (4767fff233e5c2f3b265d5b6c2b83714c2df168a28a3489dd3b063891246818b): Bind for 0.0.0.0:8080 failed: port is already allocated
Error: failed to start containers: my_first_container
shane@DESKTOP-12EQ7ND:~$ docker container rm test affectionate_knuth 85286f3931db
test
affectionate_knuth
85286f3931db
shane@DESKTOP-12EQ7ND:~$ docker ps -a
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS                        PORTS                  NAMES
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   14 minutes ago   Up 14 minutes                 0.0.0.0:8080->80/tcp   our-container
4c98f87a311f   nginx:alpine3.19   "/docker-entrypoint.…"   19 minutes ago   Exited (0) 19 minutes ago                            affectionate_wright
65233882121b   nginx              "/docker-entrypoint.…"   24 minutes ago   Exited (127) 23 minutes ago                          frosty_perlman
f369a2544364   nginx              "/docker-entrypoint.…"   26 minutes ago   Up 26 minutes                 0.0.0.0:8000->80/tcp   vigorous_bardeen
32ff4d2bb6fa   nginx              "/docker-entrypoint.…"   30 minutes ago   Exited (128) 29 minutes ago                          my_first_container
9d7c0fcc21fe   hello-world        "/hello"                 35 minutes ago   Exited (0) 2 minutes ago                             quizzical_montalcini
shane@DESKTOP-12EQ7ND:~$ docker container rm our-container
Error response from daemon: cannot remove container "/our-container": container is running: stop the container before removing or force remove
shane@DESKTOP-12EQ7ND:~$ docker container prune
WARNING! This will remove all stopped containers.
Are you sure you want to continue? [y/N] y
Deleted Containers:
4c98f87a311f8e4f713f7b7f7195b3b3eddb2c9d4635c5bce8a11afc08a6ab33
65233882121bd5025b50127bba007f611922f19392d1cb552fd3f694bb667770
32ff4d2bb6fa0aad2107b6a1162ff4a97f10be9c92af5e738d3187838a0db7cd
9d7c0fcc21feca1957c779ebaf5662c0df44d82a639df77138858e14b4e23c5b

Total reclaimed space: 2.186kB
shane@DESKTOP-12EQ7ND:~$ docker ps -a
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS          PORTS                  NAMES
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   15 minutes ago   Up 15 minutes   0.0.0.0:8080->80/tcp   our-container
f369a2544364   nginx              "/docker-entrypoint.…"   28 minutes ago   Up 28 minutes   0.0.0.0:8000->80/tcp   vigorous_bardeen
shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS          PORTS                  NAMES
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   15 minutes ago   Up 15 minutes   0.0.0.0:8080->80/tcp   our-container
f369a2544364   nginx              "/docker-entrypoint.…"   28 minutes ago   Up 28 minutes   0.0.0.0:8000->80/tcp   vigorous_bardeen
shane@DESKTOP-12EQ7ND:~$


shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS          PORTS                  NAMES
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   16 minutes ago   Up 16 minutes   0.0.0.0:8080->80/tcp   our-container
f369a2544364   nginx              "/docker-entrypoint.…"   29 minutes ago   Up 29 minutes   0.0.0.0:8000->80/tcp   vigorous_bardeen
shane@DESKTOP-12EQ7ND:~$ docker container exec -it our-container sh
/ # ls
bin                   etc                   mnt                   run                   tmp
dev                   home                  opt                   sbin                  usr
docker-entrypoint.d   lib                   proc                  srv                   var
docker-entrypoint.sh  media                 root                  sys
/ # cd usr/share/nginx/html/
/usr/share/nginx/html # nano index.html
sh: nano: not found
/usr/share/nginx/html # apk add nano
fetch https://dl-cdn.alpinelinux.org/alpine/v3.19/main/x86_64/APKINDEX.tar.gz
fetch https://dl-cdn.alpinelinux.org/alpine/v3.19/community/x86_64/APKINDEX.tar.gz
(1/1) Installing nano (7.2-r1)
Executing busybox-1.36.1-r15.trigger
OK: 46 MiB in 67 packages
/usr/share/nginx/html # nano index.html
/usr/share/nginx/html # exit
shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS          PORTS                  NAMES
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   19 minutes ago   Up 19 minutes   0.0.0.0:8080->80/tcp   our-container
f369a2544364   nginx              "/docker-entrypoint.…"   31 minutes ago   Up 31 minutes   0.0.0.0:8000->80/tcp   vigorous_bardeen
shane@DESKTOP-12EQ7ND:~$


shane@DESKTOP-12EQ7ND:~$ docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
1d1af8c28aa9   bridge    bridge    local
403e9ee89f7b   host      host      local
3c42225ac3db   none      null      local
shane@DESKTOP-12EQ7ND:~$ docker container ps
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS          PORTS                  NAMES
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   38 minutes ago   Up 38 minutes   0.0.0.0:8080->80/tcp   our-container
f369a2544364   nginx              "/docker-entrypoint.…"   50 minutes ago   Up 50 minutes   0.0.0.0:8000->80/tcp   vigorous_bardeen
shane@DESKTOP-12EQ7ND:~$ docker container inspect our-container
[
    {
        "Id": "ff330455c7582056be3565f4af95b3eea48d9a3166de948f7953176c0d1e7edb",
        "Created": "2024-05-14T15:29:54.770807847Z",
        "Path": "/docker-entrypoint.sh",
        "Args": [
            "nginx",
            "-g",
            "daemon off;"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 4058,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2024-05-14T15:29:55.053680857Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:501d84f5d06487ff81e506134dc922ed4fd2080d5521eb5b6ee4054fa17d15c4",
        "ResolvConfPath": "/var/lib/docker/containers/ff330455c7582056be3565f4af95b3eea48d9a3166de948f7953176c0d1e7edb/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/ff330455c7582056be3565f4af95b3eea48d9a3166de948f7953176c0d1e7edb/hostname",
        "HostsPath": "/var/lib/docker/containers/ff330455c7582056be3565f4af95b3eea48d9a3166de948f7953176c0d1e7edb/hosts",
        "LogPath": "/var/lib/docker/containers/ff330455c7582056be3565f4af95b3eea48d9a3166de948f7953176c0d1e7edb/ff330455c7582056be3565f4af95b3eea48d9a3166de948f7953176c0d1e7edb-json.log",
        "Name": "/our-container",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "default",
            "PortBindings": {
                "80/tcp": [
                    {
                        "HostIp": "",
                        "HostPort": "8080"
                    }
                ]
            },
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "ConsoleSize": [
                51,
                151
            ],
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "host",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": [],
            "BlkioDeviceWriteBps": [],
            "BlkioDeviceReadIOps": [],
            "BlkioDeviceWriteIOps": [],
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": false,
            "PidsLimit": null,
            "Ulimits": [],
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware",
                "/sys/devices/virtual/powercap"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/83ead0913227af59f5b812470372be0da8dcec037d34e6e02021121c97e1d374-init/diff:/var/lib/docker/overlay2/d9edacad2907a4d952ded572b0ae882f10845aee1ecaea0bdeb1379ec43d4770/diff:/var/lib/docker/overlay2/5edea14ee7c94e352784f77a3c6540f14a7853ae9cbcc47d7a4345ed4b26873c/diff:/var/lib/docker/overlay2/73f9d11fe82d476cf0d866269afc67ad8a03b8bbce73aaf7e0efafc1458024b8/diff:/var/lib/docker/overlay2/07abec05fbd8536516b12e0c3943337e4a8280dd0153c9c2b5a43f3083230bad/diff:/var/lib/docker/overlay2/bd3d96891b7e3ecb4af20e6d918dbe0fc3d8eb34fee883f4478ecda6d2aafa59/diff:/var/lib/docker/overlay2/68f38c5fb525952200852ba835653578ed9396246b8d2861bd5869e04b200cca/diff:/var/lib/docker/overlay2/1a421ba76e7b3503b53b6ae9db672acb3e3bed8cbba7585f803f1a65c525aee2/diff:/var/lib/docker/overlay2/dea8671654ae3f45c74c8b38c2d81b331f5b752eb719c95170f525e88a2d7d21/diff",
                "MergedDir": "/var/lib/docker/overlay2/83ead0913227af59f5b812470372be0da8dcec037d34e6e02021121c97e1d374/merged",
                "UpperDir": "/var/lib/docker/overlay2/83ead0913227af59f5b812470372be0da8dcec037d34e6e02021121c97e1d374/diff",
                "WorkDir": "/var/lib/docker/overlay2/83ead0913227af59f5b812470372be0da8dcec037d34e6e02021121c97e1d374/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "ff330455c758",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "80/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NGINX_VERSION=1.25.5",
                "PKG_RELEASE=1",
                "NJS_VERSION=0.8.4",
                "NJS_RELEASE=3"
            ],
            "Cmd": [
                "nginx",
                "-g",
                "daemon off;"
            ],
            "Image": "nginx:alpine3.19",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": [
                "/docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "desktop.docker.io/wsl-distro": "Ubuntu",
                "maintainer": "NGINX Docker Maintainers \u003cdocker-maint@nginx.com\u003e"
            },
            "StopSignal": "SIGQUIT"
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "e269f18b7bb9bb1aeb60cc53c9a936ff59ff713bc8c1a715cf8ec7e8b2bcfc14",
            "SandboxKey": "/var/run/docker/netns/e269f18b7bb9",
            "Ports": {
                "80/tcp": [
                    {
                        "HostIp": "0.0.0.0",
                        "HostPort": "8080"
                    }
                ]
            },
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "4a007605253c5b956d2a8c3cbe0d25c85e7c641184742b866c2e5f7c4a58cdd6",
            "Gateway": "172.17.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.17.0.3",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "02:42:ac:11:00:03",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "MacAddress": "02:42:ac:11:00:03",
                    "NetworkID": "1d1af8c28aa95899b9742915944dc81021f20ba97c0561a40e745fb4d8a7b5ad",
                    "EndpointID": "4a007605253c5b956d2a8c3cbe0d25c85e7c641184742b866c2e5f7c4a58cdd6",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.3",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "DriverOpts": null,
                    "DNSNames": null
                }
            }
        }
    }
]
shane@DESKTOP-12EQ7ND:~$ docker image ls
REPOSITORY              TAG          IMAGE ID       CREATED         SIZE
swilkey42/my-vite-app   latest       ee67f3d5c22d   4 hours ago     386MB
postgres                latest       0e536f047d0f   4 days ago      447MB
nginx                   latest       1d668e06f1e5   10 days ago     188MB
nginx                   alpine       501d84f5d064   10 days ago     48.3MB
nginx                   alpine3.19   501d84f5d064   10 days ago     48.3MB
ubuntu                  latest       bf3dc08bfed0   2 weeks ago     76.2MB
alpine                  latest       05455a08881e   3 months ago    7.38MB
hello-world             latest       d2c94e258dcb   12 months ago   13.3kB
shane@DESKTOP-12EQ7ND:~$ docker image inspect nginx
[
    {
        "Id": "sha256:1d668e06f1e534ab338404ba891c37d618dd53c9073dcdd4ebde82aa7643f83f",
        "RepoTags": [
            "nginx:latest"
        ],
        "RepoDigests": [
            "nginx@sha256:32e76d4f34f80e479964a0fbd4c5b4f6967b5322c8d004e9cf0cb81c93510766"
        ],
        "Parent": "",
        "Comment": "buildkit.dockerfile.v0",
        "Created": "2024-05-03T19:49:21Z",
        "ContainerConfig": {
            "Hostname": "",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": null,
            "Cmd": null,
            "Image": "",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": null
        },
        "DockerVersion": "",
        "Author": "",
        "Config": {
            "Hostname": "",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "80/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NGINX_VERSION=1.25.5",
                "NJS_VERSION=0.8.4",
                "NJS_RELEASE=3~bookworm",
                "PKG_RELEASE=1~bookworm"
            ],
            "Cmd": [
                "nginx",
                "-g",
                "daemon off;"
            ],
            "ArgsEscaped": true,
            "Image": "",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": [
                "/docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "maintainer": "NGINX Docker Maintainers \u003cdocker-maint@nginx.com\u003e"
            },
            "StopSignal": "SIGQUIT"
        },
        "Architecture": "amd64",
        "Os": "linux",
        "Size": 187614786,
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/2b390a7a4055422d907d9a68ff175c4c8fb01c49bdd2a185b73f36f847f7839d/diff:/var/lib/docker/overlay2/d6c7baf36b8a70ead7159e105f02a02556a34135dbe9aa855185ae00480c0608/diff:/var/lib/docker/overlay2/2284e1c37ac77596a6bc2908d68de301bb99eae3deca884c3743e7cabaeb814f/diff:/var/lib/docker/overlay2/8e8f7674d8e7d649f7497196833e7343c4f872cb3d05ae747e3607b04d830444/diff:/var/lib/docker/overlay2/3abef1f1a3d1cf4c26266cffb407ea0bb19a49932b0f6ed462209356363d01e7/diff:/var/lib/docker/overlay2/86acd2eaaef573bf84a71f86fa6db99a2fb7e8bb49ee1d9ad7302f2e01645684/diff",
                "MergedDir": "/var/lib/docker/overlay2/0b04b965cd8bd002d81f5f8feb627cbf5ae2467b262135dda612e243df80468a/merged",
                "UpperDir": "/var/lib/docker/overlay2/0b04b965cd8bd002d81f5f8feb627cbf5ae2467b262135dda612e243df80468a/diff",
                "WorkDir": "/var/lib/docker/overlay2/0b04b965cd8bd002d81f5f8feb627cbf5ae2467b262135dda612e243df80468a/work"
            },
            "Name": "overlay2"
        },
        "RootFS": {
            "Type": "layers",
            "Layers": [
                "sha256:52ec5a4316fadc09a4a51f82b8d7b66ead0d71bea4f75e81e25b4094c4219061",
                "sha256:bf6cd01dee5edc1e179aeab7de1d24dd401c2cc798cdc61323030f8da0b778ee",
                "sha256:a8a738834a4d15fbdc977804f7ed941d23b26b3ccd0364b390acb684a42fed24",
                "sha256:2e0d92876e9f41196bbbb78eabd81a24ab66d43db4d681d910fba3b4a5bd7aa7",
                "sha256:d75fd41110a448d9d52d83f6e415a4167f3ab4691a7e4948101cf64159cd1e96",
                "sha256:3f69a32a2b313adbf3d5076a3be902a667b04783a3cdfb7aef74b1b62b0a8df4",
                "sha256:b80974699bdb622b5cbb7ae31868637c5dc1d2ca6a5f61dbe654e4abb2e14632"
            ]
        },
        "Metadata": {
            "LastTagTime": "0001-01-01T00:00:00Z"
        },
        "Container": ""
    }
]
shane@DESKTOP-12EQ7ND:~$


shane@DESKTOP-12EQ7ND:~$ docker network create our-new-network
49b40530d7384651c1b50de5440ba06f52e6e678cacd92dd0de35dc09c4761b0
shane@DESKTOP-12EQ7ND:~$ docker network ls
NETWORK ID     NAME              DRIVER    SCOPE
1d1af8c28aa9   bridge            bridge    local
403e9ee89f7b   host              host      local
3c42225ac3db   none              null      local
49b40530d738   our-new-network   bridge    local
shane@DESKTOP-12EQ7ND:~$ docker container run -d --name c1 --network our-new-network nginx:alpine
4ef55652c4971c29db29054a7315ed915cdfac66e037ec17b0ae9c85ecbff084
shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS          PORTS                  NAMES
4ef55652c497   nginx:alpine       "/docker-entrypoint.…"   4 seconds ago    Up 3 seconds    80/tcp                 c1
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   46 minutes ago   Up 46 minutes   0.0.0.0:8080->80/tcp   our-container
f369a2544364   nginx              "/docker-entrypoint.…"   58 minutes ago   Up 58 minutes   0.0.0.0:8000->80/tcp   vigorous_bardeen
shane@DESKTOP-12EQ7ND:~$ docker container run -d --name c2 --network our-new-network nginx:alpine
297967c34a78f750dfc5b7802b4b6ed7abf0a3ecff519496042f2d3ebade2939
shane@DESKTOP-12EQ7ND:~$ docker container run -d --name c3 nginx:alpine
68bb87fb136ace814639cd840b79e3e449f98dcdfd184e0e98bc5f363b2e6ed0
shane@DESKTOP-12EQ7ND:~$ docker container run -d --name c4 nginx:alpine
f11ef5f36ca084af5af4a751e4f370a81f5948cfd4171163f73f2af2a46d567f
shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS          PORTS                  NAMES
f11ef5f36ca0   nginx:alpine       "/docker-entrypoint.…"   3 seconds ago    Up 2 seconds    80/tcp                 c4
68bb87fb136a   nginx:alpine       "/docker-entrypoint.…"   11 seconds ago   Up 11 seconds   80/tcp                 c3
297967c34a78   nginx:alpine       "/docker-entrypoint.…"   29 seconds ago   Up 29 seconds   80/tcp                 c2
4ef55652c497   nginx:alpine       "/docker-entrypoint.…"   51 seconds ago   Up 51 seconds   80/tcp                 c1
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   46 minutes ago   Up 46 minutes   0.0.0.0:8080->80/tcp   our-container
f369a2544364   nginx              "/docker-entrypoint.…"   59 minutes ago   Up 59 minutes   0.0.0.0:8000->80/tcp   vigorous_bardeen
shane@DESKTOP-12EQ7ND:~$ docker container exec -it c1 sh
/ # ls
bin                   etc                   mnt                   run                   tmp
dev                   home                  opt                   sbin                  usr
docker-entrypoint.d   lib                   proc                  srv                   var
docker-entrypoint.sh  media                 root                  sys
/ # ping -c 4 c3
ping: bad address 'c3'
/ # ping -c 4 c2
PING c2 (172.18.0.3): 56 data bytes
64 bytes from 172.18.0.3: seq=0 ttl=64 time=0.220 ms
64 bytes from 172.18.0.3: seq=1 ttl=64 time=0.061 ms
64 bytes from 172.18.0.3: seq=2 ttl=64 time=0.057 ms
64 bytes from 172.18.0.3: seq=3 ttl=64 time=0.064 ms

--- c2 ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max = 0.057/0.100/0.220 ms
/ # ping -c 4 c4
ping: bad address 'c4'
/ # exit
shane@DESKTOP-12EQ7ND:~$ docker container exec -it c4 sh
/ # ping -c 4 c3
ping: bad address 'c3'
/ # ping -c 4 c2
ping: bad address 'c2'
/ # ping -c 4 c1
ping: bad address 'c1'
/ # exit
shane@DESKTOP-12EQ7ND:~$ docker container exec -it c1 sh
/ # ping -c 4 c2
PING c2 (172.18.0.3): 56 data bytes
64 bytes from 172.18.0.3: seq=0 ttl=64 time=0.152 ms
64 bytes from 172.18.0.3: seq=1 ttl=64 time=0.073 ms
64 bytes from 172.18.0.3: seq=2 ttl=64 time=0.092 ms
64 bytes from 172.18.0.3: seq=3 ttl=64 time=0.066 ms

--- c2 ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max = 0.066/0.095/0.152 ms
/ # ping -c 4 c3
ping: bad address 'c3'
/ # exit
shane@DESKTOP-12EQ7ND:~$ docker container inspect c4
[
    {
        "Id": "f11ef5f36ca084af5af4a751e4f370a81f5948cfd4171163f73f2af2a46d567f",
        "Created": "2024-05-14T16:16:48.761319274Z",
        "Path": "/docker-entrypoint.sh",
        "Args": [
            "nginx",
            "-g",
            "daemon off;"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 5023,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2024-05-14T16:16:49.082767369Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:501d84f5d06487ff81e506134dc922ed4fd2080d5521eb5b6ee4054fa17d15c4",
        "ResolvConfPath": "/var/lib/docker/containers/f11ef5f36ca084af5af4a751e4f370a81f5948cfd4171163f73f2af2a46d567f/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/f11ef5f36ca084af5af4a751e4f370a81f5948cfd4171163f73f2af2a46d567f/hostname",
        "HostsPath": "/var/lib/docker/containers/f11ef5f36ca084af5af4a751e4f370a81f5948cfd4171163f73f2af2a46d567f/hosts",
        "LogPath": "/var/lib/docker/containers/f11ef5f36ca084af5af4a751e4f370a81f5948cfd4171163f73f2af2a46d567f/f11ef5f36ca084af5af4a751e4f370a81f5948cfd4171163f73f2af2a46d567f-json.log",
        "Name": "/c4",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "default",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "ConsoleSize": [
                51,
                151
            ],
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "host",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": [],
            "BlkioDeviceWriteBps": [],
            "BlkioDeviceReadIOps": [],
            "BlkioDeviceWriteIOps": [],
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": false,
            "PidsLimit": null,
            "Ulimits": [],
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware",
                "/sys/devices/virtual/powercap"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/97c301549813c8c35137f0565399045c49b3ab26915db8fc2201e0d5f602663e-init/diff:/var/lib/docker/overlay2/d9edacad2907a4d952ded572b0ae882f10845aee1ecaea0bdeb1379ec43d4770/diff:/var/lib/docker/overlay2/5edea14ee7c94e352784f77a3c6540f14a7853ae9cbcc47d7a4345ed4b26873c/diff:/var/lib/docker/overlay2/73f9d11fe82d476cf0d866269afc67ad8a03b8bbce73aaf7e0efafc1458024b8/diff:/var/lib/docker/overlay2/07abec05fbd8536516b12e0c3943337e4a8280dd0153c9c2b5a43f3083230bad/diff:/var/lib/docker/overlay2/bd3d96891b7e3ecb4af20e6d918dbe0fc3d8eb34fee883f4478ecda6d2aafa59/diff:/var/lib/docker/overlay2/68f38c5fb525952200852ba835653578ed9396246b8d2861bd5869e04b200cca/diff:/var/lib/docker/overlay2/1a421ba76e7b3503b53b6ae9db672acb3e3bed8cbba7585f803f1a65c525aee2/diff:/var/lib/docker/overlay2/dea8671654ae3f45c74c8b38c2d81b331f5b752eb719c95170f525e88a2d7d21/diff",
                "MergedDir": "/var/lib/docker/overlay2/97c301549813c8c35137f0565399045c49b3ab26915db8fc2201e0d5f602663e/merged",
                "UpperDir": "/var/lib/docker/overlay2/97c301549813c8c35137f0565399045c49b3ab26915db8fc2201e0d5f602663e/diff",
                "WorkDir": "/var/lib/docker/overlay2/97c301549813c8c35137f0565399045c49b3ab26915db8fc2201e0d5f602663e/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "f11ef5f36ca0",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "80/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NGINX_VERSION=1.25.5",
                "PKG_RELEASE=1",
                "NJS_VERSION=0.8.4",
                "NJS_RELEASE=3"
            ],
            "Cmd": [
                "nginx",
                "-g",
                "daemon off;"
            ],
            "Image": "nginx:alpine",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": [
                "/docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "desktop.docker.io/wsl-distro": "Ubuntu",
                "maintainer": "NGINX Docker Maintainers \u003cdocker-maint@nginx.com\u003e"
            },
            "StopSignal": "SIGQUIT"
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "b891b8f323f491e2bcd08028fae7ae4eb0082b941d458dff25a3c178536f9b7a",
            "SandboxKey": "/var/run/docker/netns/b891b8f323f4",
            "Ports": {
                "80/tcp": null
            },
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "b077149d88e479b6aa9568a697128da4a4a01d914fb4754dc564d322c147345c",
            "Gateway": "172.17.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.17.0.5",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "02:42:ac:11:00:05",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "MacAddress": "02:42:ac:11:00:05",
                    "NetworkID": "1d1af8c28aa95899b9742915944dc81021f20ba97c0561a40e745fb4d8a7b5ad",
                    "EndpointID": "b077149d88e479b6aa9568a697128da4a4a01d914fb4754dc564d322c147345c",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.5",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "DriverOpts": null,
                    "DNSNames": null
                }
            }
        }
    }
]
shane@DESKTOP-12EQ7ND:~$ docker container exec -it c1 sh
/ # ping -c 4 172.17.0.5
PING 172.17.0.5 (172.17.0.5): 56 data bytes

--- 172.17.0.5 ping statistics ---
4 packets transmitted, 0 packets received, 100% packet loss
/ # exit
shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE              COMMAND                  CREATED             STATUS             PORTS                  NAMES
f11ef5f36ca0   nginx:alpine       "/docker-entrypoint.…"   4 minutes ago       Up 4 minutes       80/tcp                 c4
68bb87fb136a   nginx:alpine       "/docker-entrypoint.…"   5 minutes ago       Up 5 minutes       80/tcp                 c3
297967c34a78   nginx:alpine       "/docker-entrypoint.…"   5 minutes ago       Up 5 minutes       80/tcp                 c2
4ef55652c497   nginx:alpine       "/docker-entrypoint.…"   5 minutes ago       Up 5 minutes       80/tcp                 c1
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   51 minutes ago      Up 51 minutes      0.0.0.0:8080->80/tcp   our-container
f369a2544364   nginx              "/docker-entrypoint.…"   About an hour ago   Up About an hour   0.0.0.0:8000->80/tcp   vigorous_bardeen
shane@DESKTOP-12EQ7ND:~$ docker container exec -it c3 sh
/ # ping -c 4 172.17.0.5
PING 172.17.0.5 (172.17.0.5): 56 data bytes
64 bytes from 172.17.0.5: seq=0 ttl=64 time=0.192 ms
64 bytes from 172.17.0.5: seq=1 ttl=64 time=0.064 ms
64 bytes from 172.17.0.5: seq=2 ttl=64 time=0.059 ms
64 bytes from 172.17.0.5: seq=3 ttl=64 time=0.059 ms

--- 172.17.0.5 ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max = 0.059/0.093/0.192 ms
/ # ^C

/ # exit
shane@DESKTOP-12EQ7ND:~$ docker container exec -it c2 sh
/ # ping -c 4 172.17.0.5
PING 172.17.0.5 (172.17.0.5): 56 data bytes

--- 172.17.0.5 ping statistics ---
4 packets transmitted, 0 packets received, 100% packet loss
/ # ping -c 4 c1
PING c1 (172.18.0.2): 56 data bytes
64 bytes from 172.18.0.2: seq=0 ttl=64 time=0.179 ms
64 bytes from 172.18.0.2: seq=1 ttl=64 time=0.058 ms
64 bytes from 172.18.0.2: seq=2 ttl=64 time=0.058 ms
64 bytes from 172.18.0.2: seq=3 ttl=64 time=0.054 ms

--- c1 ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max = 0.054/0.087/0.179 ms
/ # exit
shane@DESKTOP-12EQ7ND:~$

shane@DESKTOP-12EQ7ND:~$ docker container run --mount type=bind/volume, source=path/to/folder, target=path/in/container
invalid argument "type=bind/volume," for "--mount" flag: invalid field '' must be a key=value pair
See 'docker container run --help'.
shane@DESKTOP-12EQ7ND:~$ ls
24-week-lecture-resources  chess-eod                cloudinary      mod-4-resources               python-colt-steele  ultimate-react-course
Module-2-Resources         chess-near-complete      hook-flow       mod-5-resources               sequelize-practice
Section-2-Resources        chess-near-complete.zip  linux-practice  mod-6-resources               snap
app                        chess-starter            mod-2-lps       modular-curriculum-practices  solution-scripts
aws-practice               chess-starter.zip        mod-2-template  project-practice              student-subs
shane@DESKTOP-12EQ7ND:~$ cd app
shane@DESKTOP-12EQ7ND:~/app$ ls
shane@DESKTOP-12EQ7ND:~/app$ touch index.html
shane@DESKTOP-12EQ7ND:~/app$ nano index.html
shane@DESKTOP-12EQ7ND:~/app$ docker ps
CONTAINER ID   IMAGE              COMMAND                  CREATED             STATUS             PORTS                  NAMES
f11ef5f36ca0   nginx:alpine       "/docker-entrypoint.…"   13 minutes ago      Up 13 minutes      80/tcp                 c4
68bb87fb136a   nginx:alpine       "/docker-entrypoint.…"   13 minutes ago      Up 13 minutes      80/tcp                 c3
297967c34a78   nginx:alpine       "/docker-entrypoint.…"   13 minutes ago      Up 13 minutes      80/tcp                 c2
4ef55652c497   nginx:alpine       "/docker-entrypoint.…"   14 minutes ago      Up 13 minutes      80/tcp                 c1
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   About an hour ago   Up About an hour   0.0.0.0:8080->80/tcp   our-container
f369a2544364   nginx              "/docker-entrypoint.…"   About an hour ago   Up About an hour   0.0.0.0:8000->80/tcp   vigorous_bardeen
shane@DESKTOP-12EQ7ND:~/app$ docker container stop c1 c2 c3 c4 our-container vigorous_bardeen
c1
c2
c3
c4
our-container
vigorous_bardeen
shane@DESKTOP-12EQ7ND:~/app$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
shane@DESKTOP-12EQ7ND:~/app$ docker ps -a
CONTAINER ID   IMAGE              COMMAND                  CREATED             STATUS                      PORTS     NAMES
f11ef5f36ca0   nginx:alpine       "/docker-entrypoint.…"   13 minutes ago      Exited (0) 11 seconds ago             c4
68bb87fb136a   nginx:alpine       "/docker-entrypoint.…"   14 minutes ago      Exited (0) 11 seconds ago             c3
297967c34a78   nginx:alpine       "/docker-entrypoint.…"   14 minutes ago      Exited (0) 11 seconds ago             c2
4ef55652c497   nginx:alpine       "/docker-entrypoint.…"   14 minutes ago      Exited (0) 11 seconds ago             c1
ff330455c758   nginx:alpine3.19   "/docker-entrypoint.…"   About an hour ago   Exited (0) 11 seconds ago             our-container
f369a2544364   nginx              "/docker-entrypoint.…"   About an hour ago   Exited (0) 11 seconds ago             vigorous_bardeen
shane@DESKTOP-12EQ7ND:~/app$ cd ..
shane@DESKTOP-12EQ7ND:~$ ls
24-week-lecture-resources  chess-eod                cloudinary      mod-4-resources               python-colt-steele  ultimate-react-course
Module-2-Resources         chess-near-complete      hook-flow       mod-5-resources               sequelize-practice
Section-2-Resources        chess-near-complete.zip  linux-practice  mod-6-resources               snap
app                        chess-starter            mod-2-lps       modular-curriculum-practices  solution-scripts
aws-practice               chess-starter.zip        mod-2-template  project-practice              student-subs
shane@DESKTOP-12EQ7ND:~$ docker container run -d --mount type=bind, source="$(pwd)/app", target=/usr/share/nginx/html -p 8080:80 nginx:alpine
invalid argument "type=bind," for "--mount" flag: invalid field '' must be a key=value pair
See 'docker container run --help'.
shane@DESKTOP-12EQ7ND:~$ docker container run -d --mount type=bind source="$(pwd)/app" target=/usr/share/nginx/html -p 8080:80 nginx:alpine
invalid argument "type=bind" for "--mount" flag: target is required
See 'docker container run --help'.
shane@DESKTOP-12EQ7ND:~$ docker container run -d --mount type=bind,source="$(pwd)/app",target=/usr/share/nginx/html -p 8080:80 nginx:alpine
c5c7e38ba9bea63991baa721b6489337903e2f62a5afe13e7ad60104cb51b3c2
shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                  NAMES
c5c7e38ba9be   nginx:alpine   "/docker-entrypoint.…"   8 seconds ago   Up 8 seconds   0.0.0.0:8080->80/tcp   intelligent_edison
shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED              STATUS              PORTS                  NAMES
c5c7e38ba9be   nginx:alpine   "/docker-entrypoint.…"   About a minute ago   Up About a minute   0.0.0.0:8080->80/tcp   intelligent_edison
shane@DESKTOP-12EQ7ND:~$ docker container exec -it intelligent_edison sh
/ # ls
bin                   etc                   mnt                   run                   tmp
dev                   home                  opt                   sbin                  usr
docker-entrypoint.d   lib                   proc                  srv                   var
docker-entrypoint.sh  media                 root                  sys
/ # cd usr/share/nginx/html
/usr/share/nginx/html # ls
index.html
/usr/share/nginx/html # apk add nano
fetch https://dl-cdn.alpinelinux.org/alpine/v3.19/main/x86_64/APKINDEX.tar.gz
fetch https://dl-cdn.alpinelinux.org/alpine/v3.19/community/x86_64/APKINDEX.tar.gz
(1/1) Installing nano (7.2-r1)
Executing busybox-1.36.1-r15.trigger
OK: 46 MiB in 67 packages
/usr/share/nginx/html # nano index.html
/usr/share/nginx/html # exit
shane@DESKTOP-12EQ7ND:~$ nano app/index.html
shane@DESKTOP-12EQ7ND:~$ cd a
-bash: cd: a: No such file or directory
shane@DESKTOP-12EQ7ND:~$ cd app/
shane@DESKTOP-12EQ7ND:~/app$ code .
shane@DESKTOP-12EQ7ND:~/app$


Welcome to Ubuntu 22.04.4 LTS (GNU/Linux 5.15.146.1-microsoft-standard-WSL2 x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 * Strictly confined Kubernetes makes edge and IoT secure. Learn how MicroK8s
   just raised the bar for easy, resilient and secure K8s cluster deployment.

   https://ubuntu.com/engage/secure-kubernetes-at-the-edge

This message is shown once a day. To disable it please create the
/home/shane/.hushlogin file.
shane@DESKTOP-12EQ7ND:~$
shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                  NAMES
6a1b7b93eb3d   postgres       "docker-entrypoint.s…"   5 minutes ago    Up 4 minutes    5432/tcp               postgres1
c5c7e38ba9be   nginx:alpine   "/docker-entrypoint.…"   15 minutes ago   Up 15 minutes   0.0.0.0:8080->80/tcp   intelligent_edison
shane@DESKTOP-12EQ7ND:~$ docker container rm postgres1 -f
postgres1
shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                  NAMES
c5c7e38ba9be   nginx:alpine   "/docker-entrypoint.…"   16 minutes ago   Up 16 minutes   0.0.0.0:8080->80/tcp   intelligent_edison
shane@DESKTOP-12EQ7ND:~$ docker container run -e POSTGRES_PASSWORD=password --name=postgres1 --mount type=volume,source=postgres-data,target=/var/lib/postgresql/data
"docker container run" requires at least 1 argument.
See 'docker container run --help'.

Usage:  docker container run [OPTIONS] IMAGE [COMMAND] [ARG...]

Create and run a new container from an image
shane@DESKTOP-12EQ7ND:~$ docker container run -e POSTGRES_PASSWORD=password --name=postgres1 --mount type=volume,source=postgres-data,target=/var/lib/postgresql/data postgres

PostgreSQL Database directory appears to contain a database; Skipping initialization

2024-05-14 16:52:16.998 UTC [1] LOG:  starting PostgreSQL 16.3 (Debian 16.3-1.pgdg120+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
2024-05-14 16:52:16.998 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
2024-05-14 16:52:16.998 UTC [1] LOG:  listening on IPv6 address "::", port 5432
2024-05-14 16:52:17.007 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2024-05-14 16:52:17.017 UTC [29] LOG:  database system was interrupted; last known up at 2024-05-14 16:46:16 UTC
2024-05-14 16:52:17.456 UTC [29] LOG:  database system was not properly shut down; automatic recovery in progress
2024-05-14 16:52:17.461 UTC [29] LOG:  redo starts at 0/14EA2F8
2024-05-14 16:52:17.462 UTC [29] LOG:  invalid record length at 0/152B668: expected at least 24, got 0
2024-05-14 16:52:17.462 UTC [29] LOG:  redo done at 0/152B630 system usage: CPU: user: 0.00 s, system: 0.00 s, elapsed: 0.00 s
2024-05-14 16:52:17.471 UTC [27] LOG:  checkpoint starting: end-of-recovery immediate wait
2024-05-14 16:52:17.506 UTC [27] LOG:  checkpoint complete: wrote 40 buffers (0.2%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.009 s, sync=0.012 s, total=0.041 s; sync files=11, longest=0.005 s, average=0.002 s; distance=260 kB, estimate=260 kB; lsn=0/152B668, redo lsn=0/152B668
2024-05-14 16:52:17.511 UTC [1] LOG:  database system is ready to accept connections
psql
exit
^C2024-05-14 16:52:31.453 UTC [1] LOG:  received fast shutdown request
2024-05-14 16:52:31.457 UTC [1] LOG:  aborting any active transactions
2024-05-14 16:52:31.458 UTC [1] LOG:  background worker "logical replication launcher" (PID 32) exited with exit code 1
2024-05-14 16:52:31.458 UTC [27] LOG:  shutting down
2024-05-14 16:52:31.463 UTC [27] LOG:  checkpoint starting: shutdown immediate
2024-05-14 16:52:31.478 UTC [27] LOG:  checkpoint complete: wrote 0 buffers (0.0%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.001 s, sync=0.001 s, total=0.020 s; sync files=0, longest=0.000 s, average=0.000 s; distance=0 kB, estimate=234 kB; lsn=0/152B6E0, redo lsn=0/152B6E0
2024-05-14 16:52:31.480 UTC [1] LOG:  database system is shut down
shane@DESKTOP-12EQ7ND:~$ docker container start -it postgres1 sh
unknown shorthand flag: 't' in -t
See 'docker container start --help'.
shane@DESKTOP-12EQ7ND:~$ docker container start postgres1
postgres1
shane@DESKTOP-12EQ7ND:~$ docker container exec -it postgres1 sh
# psql -U postgres
psql (16.3 (Debian 16.3-1.pgdg120+1))
Type "help" for help.

postgres=# \l
postgres=# create table users (name varchar(80));
CREATE TABLE
postgres=# \l
postgres=# \d
         List of relations
 Schema | Name  | Type  |  Owner
--------+-------+-------+----------
 public | users | table | postgres
(1 row)

postgres=# exit
# exit
shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                  NAMES
9f4ab78c43a7   postgres       "docker-entrypoint.s…"   3 minutes ago    Up 3 minutes    5432/tcp               postgres1
c5c7e38ba9be   nginx:alpine   "/docker-entrypoint.…"   21 minutes ago   Up 21 minutes   0.0.0.0:8080->80/tcp   intelligent_edison
shane@DESKTOP-12EQ7ND:~$ docker container stop postgres1
postgres1
shane@DESKTOP-12EQ7ND:~$ docker container run --name postgres2 -d postgres
ae9da1b70d052b8353bae72663170bc66dae0efc1196375cba06d6e10668ab7e
shane@DESKTOP-12EQ7ND:~$ docker container exec -it postgres2 sh
Error response from daemon: container ae9da1b70d052b8353bae72663170bc66dae0efc1196375cba06d6e10668ab7e is not running
shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                  NAMES
c5c7e38ba9be   nginx:alpine   "/docker-entrypoint.…"   22 minutes ago   Up 22 minutes   0.0.0.0:8080->80/tcp   intelligent_edison
shane@DESKTOP-12EQ7ND:~$ docker container run -e POSTGRES_PASSWORD=password --name=postgres2 --mount type=volume,source=po
stgres-data,target=/var/lib/postgresql/data postgres
docker: Error response from daemon: Conflict. The container name "/postgres2" is already in use by container "ae9da1b70d052b8353bae72663170bc66dae0efc1196375cba06d6e10668ab7e". You have to remove (or rename) that container to be able to reuse that name.
See 'docker run --help'.
shane@DESKTOP-12EQ7ND:~$ docker container rm postgres2
postgres2
shane@DESKTOP-12EQ7ND:~$ docker container run -e POSTGRES_PASSWORD=password --name=postgres2 --mount type=volume,source=postgres-data,target=/var/lib/postgresql/data postgres

PostgreSQL Database directory appears to contain a database; Skipping initialization

2024-05-14 16:58:08.438 UTC [1] LOG:  starting PostgreSQL 16.3 (Debian 16.3-1.pgdg120+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
2024-05-14 16:58:08.438 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
2024-05-14 16:58:08.438 UTC [1] LOG:  listening on IPv6 address "::", port 5432
2024-05-14 16:58:08.447 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2024-05-14 16:58:08.457 UTC [29] LOG:  database system was shut down at 2024-05-14 16:56:23 UTC
2024-05-14 16:58:08.463 UTC [1] LOG:  database system is ready to accept connections
^C2024-05-14 16:58:20.944 UTC [1] LOG:  received fast shutdown request
2024-05-14 16:58:20.948 UTC [1] LOG:  aborting any active transactions
2024-05-14 16:58:20.950 UTC [1] LOG:  background worker "logical replication launcher" (PID 32) exited with exit code 1
2024-05-14 16:58:20.950 UTC [27] LOG:  shutting down
2024-05-14 16:58:20.954 UTC [27] LOG:  checkpoint starting: shutdown immediate
2024-05-14 16:58:20.982 UTC [27] LOG:  checkpoint complete: wrote 3 buffers (0.0%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.009 s, sync=0.005 s, total=0.033 s; sync files=2, longest=0.003 s, average=0.003 s; distance=0 kB, estimate=0 kB; lsn=0/1542C40, redo lsn=0/1542C40
2024-05-14 16:58:20.985 UTC [1] LOG:  database system is shut down
shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                  NAMES
c5c7e38ba9be   nginx:alpine   "/docker-entrypoint.…"   23 minutes ago   Up 23 minutes   0.0.0.0:8080->80/tcp   intelligent_edison
shane@DESKTOP-12EQ7ND:~$ docker container start postgres2
postgres2
shane@DESKTOP-12EQ7ND:~$ docker container exec -it postgres2 sh
# psql -U postgres
psql (16.3 (Debian 16.3-1.pgdg120+1))
Type "help" for help.

postgres=# \d
         List of relations
 Schema | Name  | Type  |  Owner
--------+-------+-------+----------
 public | users | table | postgres
(1 row)

postgres=# exit
# exit
shane@DESKTOP-12EQ7ND:~$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED              STATUS          PORTS                  NAMES
6ba2caa7bfa5   postgres       "docker-entrypoint.s…"   About a minute ago   Up 40 seconds   5432/tcp               postgres2
c5c7e38ba9be   nginx:alpine   "/docker-entrypoint.…"   24 minutes ago       Up 24 minutes   0.0.0.0:8080->80/tcp   intelligent_edison
shane@DESKTOP-12EQ7ND:~$


shane@DESKTOP-12EQ7ND:~$ termdown 15m
shane@DESKTOP-12EQ7ND:~$
shane@DESKTOP-12EQ7ND:~$ docker image ls
REPOSITORY              TAG          IMAGE ID       CREATED         SIZE
swilkey42/my-vite-app   latest       ee67f3d5c22d   5 hours ago     386MB
postgres                latest       0e536f047d0f   4 days ago      447MB
nginx                   alpine       501d84f5d064   10 days ago     48.3MB
nginx                   alpine3.19   501d84f5d064   10 days ago     48.3MB
nginx                   latest       1d668e06f1e5   10 days ago     188MB
ubuntu                  latest       bf3dc08bfed0   2 weeks ago     76.2MB
alpine                  latest       05455a08881e   3 months ago    7.38MB
hello-world             latest       d2c94e258dcb   12 months ago   13.3kB
shane@DESKTOP-12EQ7ND:~$ docker image inspect nginx
[
    {
        "Id": "sha256:1d668e06f1e534ab338404ba891c37d618dd53c9073dcdd4ebde82aa7643f83f",
        "RepoTags": [
            "nginx:latest"
        ],
        "RepoDigests": [
            "nginx@sha256:32e76d4f34f80e479964a0fbd4c5b4f6967b5322c8d004e9cf0cb81c93510766"
        ],
        "Parent": "",
        "Comment": "buildkit.dockerfile.v0",
        "Created": "2024-05-03T19:49:21Z",
        "ContainerConfig": {
            "Hostname": "",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": null,
            "Cmd": null,
            "Image": "",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": null
        },
        "DockerVersion": "",
        "Author": "",
        "Config": {
            "Hostname": "",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "80/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NGINX_VERSION=1.25.5",
                "NJS_VERSION=0.8.4",
                "NJS_RELEASE=3~bookworm",
                "PKG_RELEASE=1~bookworm"
            ],
            "Cmd": [
                "nginx",
                "-g",
                "daemon off;"
            ],
            "ArgsEscaped": true,
            "Image": "",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": [
                "/docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "maintainer": "NGINX Docker Maintainers \u003cdocker-maint@nginx.com\u003e"
            },
            "StopSignal": "SIGQUIT"
        },
        "Architecture": "amd64",
        "Os": "linux",
        "Size": 187614786,
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/2b390a7a4055422d907d9a68ff175c4c8fb01c49bdd2a185b73f36f847f7839d/diff:/var/lib/docker/overlay2/d6c7baf36b8a70ead7159e105f02a02556a34135dbe9aa855185ae00480c0608/diff:/var/lib/docker/overlay2/2284e1c37ac77596a6bc2908d68de301bb99eae3deca884c3743e7cabaeb814f/diff:/var/lib/docker/overlay2/8e8f7674d8e7d649f7497196833e7343c4f872cb3d05ae747e3607b04d830444/diff:/var/lib/docker/overlay2/3abef1f1a3d1cf4c26266cffb407ea0bb19a49932b0f6ed462209356363d01e7/diff:/var/lib/docker/overlay2/86acd2eaaef573bf84a71f86fa6db99a2fb7e8bb49ee1d9ad7302f2e01645684/diff",
                "MergedDir": "/var/lib/docker/overlay2/0b04b965cd8bd002d81f5f8feb627cbf5ae2467b262135dda612e243df80468a/merged",
                "UpperDir": "/var/lib/docker/overlay2/0b04b965cd8bd002d81f5f8feb627cbf5ae2467b262135dda612e243df80468a/diff",
                "WorkDir": "/var/lib/docker/overlay2/0b04b965cd8bd002d81f5f8feb627cbf5ae2467b262135dda612e243df80468a/work"
            },
            "Name": "overlay2"
        },
        "RootFS": {
            "Type": "layers",
            "Layers": [
                "sha256:52ec5a4316fadc09a4a51f82b8d7b66ead0d71bea4f75e81e25b4094c4219061",
                "sha256:bf6cd01dee5edc1e179aeab7de1d24dd401c2cc798cdc61323030f8da0b778ee",
                "sha256:a8a738834a4d15fbdc977804f7ed941d23b26b3ccd0364b390acb684a42fed24",
                "sha256:2e0d92876e9f41196bbbb78eabd81a24ab66d43db4d681d910fba3b4a5bd7aa7",
                "sha256:d75fd41110a448d9d52d83f6e415a4167f3ab4691a7e4948101cf64159cd1e96",
                "sha256:3f69a32a2b313adbf3d5076a3be902a667b04783a3cdfb7aef74b1b62b0a8df4",
                "sha256:b80974699bdb622b5cbb7ae31868637c5dc1d2ca6a5f61dbe654e4abb2e14632"
            ]
        },
        "Metadata": {
            "LastTagTime": "0001-01-01T00:00:00Z"
        },
        "Container": ""
    }
]
shane@DESKTOP-12EQ7ND:~$ docker image history nginx
IMAGE          CREATED       CREATED BY                                      SIZE      COMMENT
1d668e06f1e5   10 days ago   CMD ["nginx" "-g" "daemon off;"]                0B        buildkit.dockerfile.v0
<missing>      10 days ago   STOPSIGNAL SIGQUIT                              0B        buildkit.dockerfile.v0
<missing>      10 days ago   EXPOSE map[80/tcp:{}]                           0B        buildkit.dockerfile.v0
<missing>      10 days ago   ENTRYPOINT ["/docker-entrypoint.sh"]            0B        buildkit.dockerfile.v0
<missing>      10 days ago   COPY 30-tune-worker-processes.sh /docker-ent…   4.62kB    buildkit.dockerfile.v0
<missing>      10 days ago   COPY 20-envsubst-on-templates.sh /docker-ent…   3.02kB    buildkit.dockerfile.v0
<missing>      10 days ago   COPY 15-local-resolvers.envsh /docker-entryp…   336B      buildkit.dockerfile.v0
<missing>      10 days ago   COPY 10-listen-on-ipv6-by-default.sh /docker…   2.12kB    buildkit.dockerfile.v0
<missing>      10 days ago   COPY docker-entrypoint.sh / # buildkit          1.62kB    buildkit.dockerfile.v0
<missing>      10 days ago   RUN /bin/sh -c set -x     && groupadd --syst…   113MB     buildkit.dockerfile.v0
<missing>      10 days ago   ENV PKG_RELEASE=1~bookworm                      0B        buildkit.dockerfile.v0
<missing>      10 days ago   ENV NJS_RELEASE=3~bookworm                      0B        buildkit.dockerfile.v0
<missing>      10 days ago   ENV NJS_VERSION=0.8.4                           0B        buildkit.dockerfile.v0
<missing>      10 days ago   ENV NGINX_VERSION=1.25.5                        0B        buildkit.dockerfile.v0
<missing>      10 days ago   LABEL maintainer=NGINX Docker Maintainers <d…   0B        buildkit.dockerfile.v0
<missing>      2 weeks ago   /bin/sh -c #(nop)  CMD ["bash"]                 0B
<missing>      2 weeks ago   /bin/sh -c #(nop) ADD file:4b1be1de1a1e5aa60…   74.8MB
shane@DESKTOP-12EQ7ND:~$ docker image ls
REPOSITORY              TAG          IMAGE ID       CREATED         SIZE
swilkey42/my-vite-app   latest       ee67f3d5c22d   5 hours ago     386MB
postgres                latest       0e536f047d0f   4 days ago      447MB
nginx                   latest       1d668e06f1e5   10 days ago     188MB
nginx                   alpine       501d84f5d064   10 days ago     48.3MB
nginx                   alpine3.19   501d84f5d064   10 days ago     48.3MB
ubuntu                  latest       bf3dc08bfed0   2 weeks ago     76.2MB
alpine                  latest       05455a08881e   3 months ago    7.38MB
hello-world             latest       d2c94e258dcb   12 months ago   13.3kB
shane@DESKTOP-12EQ7ND:~$ docker image rm hello-world
Untagged: hello-world:latest
Untagged: hello-world@sha256:a26bff933ddc26d5cdf7faa98b4ae1e3ec20c4985e6f87ac0973052224d24302
Deleted: sha256:d2c94e258dcb3c5ac2798d32e1249e42ef01cba4841c2234249495f87264ac5a
Deleted: sha256:ac28800ec8bb38d5c35b49d45a6ac4777544941199075dff8c4eb63e093aa81e
shane@DESKTOP-12EQ7ND:~$

EODshane@DESKTOP-12EQ7ND:~/Section-2-Resources/Module-6-Resources/week_19/Day-2/images/lecture-code$ npm create vite@latest my-app -- --template react

Scaffolding project in /home/shane/Section-2-Resources/Module-6-Resources/week_19/Day-2/images/lecture-code/my-app...

Done. Now run:

  cd my-app
  npm install
  npm run dev

EODshane@DESKTOP-12EQ7ND:~/Section-2-Resources/Module-6-Resources/week_19/Day-2/images/lecture-code$ ls
Dockerfile  my-app
EODshane@DESKTOP-12EQ7ND:~/Section-2-Resources/Module-6-Resources/week_19/Day-2/images/lecture-code$ cd my-app/
EODshane@DESKTOP-12EQ7ND:~/Section-2-Resources/Module-6-Resources/week_19/Day-2/images/lecture-code/my-app$ npm i

added 279 packages, and audited 280 packages in 30s

103 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
EODshane@DESKTOP-12EQ7ND:~/Section-2-Resources/Module-6-Resources/week_19/Day-2/images/lecture-code/my-app$ npm run dev

> my-app@0.0.0 dev
> vite


  VITE v5.2.11  ready in 138 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
12:44:56 PM [vite] hmr update /src/App.jsx
^C
EODshane@DESKTOP-12EQ7ND:~/Section-2-Resources/Module-6-Resources/week_19/Day-2/images/lecture-code/my-app$ docker build -t swilkey42/our-first-react-app-image .
[+] Building 15.2s (9/10)                                                                                                docker:default
 => [internal] load build definition from Dockerfile                                                                               0.0s
 => => transferring dockerfile: 163B                                                                                               0.0s
 => [internal] load metadata for docker.io/library/node:18-alpine3.18                                                              2.5s
 => [auth] library/node:pull token for registry-1.docker.io                                                                        0.0s
 => [internal] load .dockerignore                                                                                                  0.0s
 => => transferring context: 62B                                                                                                   0.0s
 => [1/5] FROM docker.io/library/node:18-alpine3.18@sha256:333902a683678101fbbfadeb0a1ed6715db1ffb39d79e344cbf78689d9616f68        0.0s
 => [internal] load build context                                                                                                  0.4s
 => => transferring context: 163.32kB                                                                                              0.3s
 => CACHED [2/5] WORKDIR /app                                                                                                      0.0s
 => [3/5] COPY package*.json .                                                                                                     0.1s
 => CANCELED [4/5] RUN npm install                                                                                                12.2s
ERROR: failed to solve: Canceled: context canceled
EODshane@DESKTOP-12EQ7ND:~/Section-2-Resources/Module-6-Resources/week_19/Day-2/images/lecture-code/my-app$ docker image ls
REPOSITORY              TAG          IMAGE ID       CREATED        SIZE
swilkey42/my-vite-app   latest       ee67f3d5c22d   5 hours ago    386MB
postgres                latest       0e536f047d0f   4 days ago     447MB
nginx                   alpine       501d84f5d064   10 days ago    48.3MB
nginx                   alpine3.19   501d84f5d064   10 days ago    48.3MB
nginx                   latest       1d668e06f1e5   10 days ago    188MB
ubuntu                  latest       bf3dc08bfed0   2 weeks ago    76.2MB
alpine                  latest       05455a08881e   3 months ago   7.38MB
EODshane@DESKTOP-12EQ7ND:~/Section-2-Resources/Module-6-Resources/week_19/Day-2/images/lecture-code/my-app$ docker build -t swilkey42/my-vite-app .
[+] Building 11.6s (10/10) FINISHED                                                                                      docker:default
 => [internal] load build definition from Dockerfile                                                                               0.0s
 => => transferring dockerfile: 163B                                                                                               0.0s
 => [internal] load metadata for docker.io/library/node:18-alpine3.18                                                              0.5s
 => [internal] load .dockerignore                                                                                                  0.0s
 => => transferring context: 62B                                                                                                   0.0s
 => [1/5] FROM docker.io/library/node:18-alpine3.18@sha256:333902a683678101fbbfadeb0a1ed6715db1ffb39d79e344cbf78689d9616f68        0.0s
 => [internal] load build context                                                                                                  0.0s
 => => transferring context: 570B                                                                                                  0.0s
 => CACHED [2/5] WORKDIR /app                                                                                                      0.0s
 => CACHED [3/5] COPY package*.json .                                                                                              0.0s
 => [4/5] RUN npm install                                                                                                         10.2s
 => [5/5] COPY . .                                                                                                                 0.1s
 => exporting to image                                                                                                             0.6s
 => => exporting layers                                                                                                            0.6s
 => => writing image sha256:f3eaa7e84f213d7429d0a01a554ce41d83671aacb85b5dfcd7ac78893af68540                                       0.0s
 => => naming to docker.io/swilkey42/my-vite-app                                                                                   0.0s

What's Next?
  View a summary of image vulnerabilities and recommendations → docker scout quickview
EODshane@DESKTOP-12EQ7ND:~/Section-2-Resources/Module-6-Resources/week_19/Day-2/images/lecture-code/my-app$ docker image ls
REPOSITORY              TAG          IMAGE ID       CREATED          SIZE
swilkey42/my-vite-app   latest       f3eaa7e84f21   21 seconds ago   199MB
<none>                  <none>       ee67f3d5c22d   5 hours ago      386MB
postgres                latest       0e536f047d0f   4 days ago       447MB
nginx                   latest       1d668e06f1e5   10 days ago      188MB
nginx                   alpine       501d84f5d064   10 days ago      48.3MB
nginx                   alpine3.19   501d84f5d064   10 days ago      48.3MB
ubuntu                  latest       bf3dc08bfed0   2 weeks ago      76.2MB
alpine                  latest       05455a08881e   3 months ago     7.38MB
EODshane@DESKTOP-12EQ7ND:~/Section-2-Resources/Module-6-Resources/week_19/Day-2/images/lecture-code/my-app$ docker container run -p 5173:5173 swilkey42/my-vite-app

> my-app@0.0.0 dev
> vite


  VITE v5.2.11  ready in 162 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
^Cnpm ERR! path /app
npm ERR! command failed
npm ERR! signal SIGINT
npm ERR! command sh -c vite

npm ERR! A complete log of this run can be found in: /root/.npm/_logs/2024-05-14T17_49_46_753Z-debug-0.log
EODshane@DESKTOP-12EQ7ND:~/Section-2-Resources/Module-6-Resources/week_19/Day-2/images/lecture-code/my-app$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED             STATUS             PORTS                  NAMES
6ba2caa7bfa5   postgres       "docker-entrypoint.s…"   52 minutes ago      Up 52 minutes      5432/tcp               postgres2
c5c7e38ba9be   nginx:alpine   "/docker-entrypoint.…"   About an hour ago   Up About an hour   0.0.0.0:8080->80/tcp   intelligent_edison
EODshane@DESKTOP-12EQ7ND:~/Section-2-Resources/Module-6-Resources/week_19/Day-2/images/lecture-code/my-app$ docker build -t swilkey42/my-vite-app .
[+] Building 0.8s (10/10) FINISHED                                                                                       docker:default
 => [internal] load build definition from Dockerfile                                                                               0.0s
 => => transferring dockerfile: 181B                                                                                               0.0s
 => [internal] load metadata for docker.io/library/node:18-alpine3.18                                                              0.5s
 => [internal] load .dockerignore                                                                                                  0.0s
 => => transferring context: 62B                                                                                                   0.0s
 => [1/5] FROM docker.io/library/node:18-alpine3.18@sha256:333902a683678101fbbfadeb0a1ed6715db1ffb39d79e344cbf78689d9616f68        0.0s
 => [internal] load build context                                                                                                  0.0s
 => => transferring context: 724B                                                                                                  0.0s
 => CACHED [2/5] WORKDIR /app                                                                                                      0.0s
 => CACHED [3/5] COPY package*.json .                                                                                              0.0s
 => CACHED [4/5] RUN npm install                                                                                                   0.0s
 => [5/5] COPY . .                                                                                                                 0.1s
 => exporting to image                                                                                                             0.1s
 => => exporting layers                                                                                                            0.1s
 => => writing image sha256:4851023713708d1e151988f61bcf8a8786a3319e29b0d9ba9b91f895c7579e71                                       0.0s
 => => naming to docker.io/swilkey42/my-vite-app                                                                                   0.0s

What's Next?
  View a summary of image vulnerabilities and recommendations → docker scout quickview
EODshane@DESKTOP-12EQ7ND:~/Section-2-Resources/Module-6-Resources/week_19/Day-2/images/lecture-code/my-app$ docker container run -p 5173:5173 swilkey42/my-vite-app

> my-app@0.0.0 dev
> vite --host


  VITE v5.2.11  ready in 153 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://172.17.0.4:5173/
^Cnpm ERR! path /app
npm ERR! command failed
npm ERR! signal SIGINT
npm ERR! command sh -c vite --host

npm ERR! A complete log of this run can be found in: /root/.npm/_logs/2024-05-14T17_51_11_042Z-debug-0.log
EODshane@DESKTOP-12EQ7ND:~/Section-2-Resources/Module-6-Resources/week_19/Day-2/images/lecture-code/my-app$ 