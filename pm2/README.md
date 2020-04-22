## PM2

#### pm2 简介

pm2 是一个内置负载均衡的 node.js 应用进程管理器（也支持 Windows）。

* 简单易用、后台运行、快速部署，常用的命令就几个
* 可轻松集群模式启动
* 可以无宕机重载应用程序，保持不断连接的情况下轻松重载代码
* 完善的日志
* 自动停止不稳定的进程
* 保活应用程序

#### pm2 安装

```
npm i pm2 -g
```

#### 用 pm2 启动项目

```
pm2 start app.js
```

#### 关闭

```
pm2 stop 0
```

为什么 stop 0 ？ 0：是进程ID，所以是通过进程ID关闭的

#### 其它方式启动/关闭

启动项目，并命名一个应用程序名称

```
pm2 start app.js --name test
```

根据 name 关闭项目

```
pm2 stop test
```

#### 从 pm2 中删除

```
pm2 delete test
```

当然也可以 pm2 delete 进程ID

#### 重载和重启

当应用程序代码有更新，可以用重载来加载新代码，也可以用重启来完成

```
pm2 reload test
pm2 restart test
```

reload 可以做到 0 秒宕机加载新的代码，restart 则是重新启动，生产环境中多用 reload 来完成代码更新！

#### 查看详情

```
pm2 show test
```

通过查看详情就可以看到很多有用信息，包含日志和错误输出的文件路径（感觉日志是用的比较多的）　

#### 多项目操作

上面是单项目操作，多项目操作是如何呢？

启动其它项目也如上面命令，我新启一个项目

```
pm2 start app.js --name test2
```

想要对这 2 个项目进行批量操作（多个也一样），如下(重加载全部/停止全部/重启全部/删除全部)

```
pm2 reload all
pm2 stop all
pm2 restart all
pm2 delete all
```

### 集群 cluster

上面从图中可以看出 mode 是 “fork”

开发环境中多以 fork 的方式启动，生产环境中多用 cluster 方式启动

#### 启动方式

```
pm2 start app.js -i 2 --name test
```

这表示启动 2 个并命名为 test，在后台以 cluster 方式运行

### 其它操作

watch：

开启监控代码修改自动重启

```
pm2 start app.js --name test --watch
```

上面的命令中启去吧了test项目并开启了watching，这个用处主要更新代码后，不用重载或重启项目即可以立即让更新的代码起作用

建议：这个适合在开发时用，可以省不少时间，生产环境下最好不要用

list：

可以列出pm2中所有项目

```
pm2 list
```

monit：

用monit可以打开实时监视器去查看资源占用情况

```
pm2 monit
```


logs:

实时查看日志输出情况（当然，我更习惯去日志文件里看）

```
pm2 logs
```

#### 最后：

基本用上面这些命令就够了，现在项目中就用的PM2，感觉还是不错，用于生产环境完全没问题！