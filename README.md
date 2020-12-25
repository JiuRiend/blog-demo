## demo-blog

使用vuepress 搭建github.io在线访问网站
### 操作

npm install

...code

npm run deploy

### 执行打包后的若干问题

> SSH 公钥执行不生效的问题
```
npm run deploy 

# Please make sure you have the correct access rights
and the repository exists.

ssh-add -l
# The agent has no identities.

# 打开身份验证代理
ssh-agent 
eval `ssh-agent -s`

# 需要在重新引导后手动添加它们
ssh-add ~/.ssh/xxxx_rsa

```