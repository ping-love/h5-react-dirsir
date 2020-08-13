<!--
 * @Author: wangshengxian
 * @Date: 2020-08-12 09:54:37
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-12 16:25:06
 * @Desc: react基础点说明文档
-->

### 组件生命周期函数

组件将要挂载时触发的函数：componentWillMount
组件挂载完成时触发的函数：componentDidMount
是否要更新数据时触发的函数：shouldComponentUpdate
将要更新数据时触发的函数：componentWillUpdate
数据更新完成时触发的函数：componentDidUpdate
组件将要销毁时触发的函数：componentWillUnmount
父组件中改变了 props 传值时触发的函数：componentWillReceiveProps

## 注意

注意： 路由表改变后要重启服务

### 路由配置

注意：根路径"/" 在 switch 下需要严格匹配，匹配重定向也需要多斟酌一下

```js
import {
  BrowserRouter as Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

<BrowserRouter>
  <Switch>
    <Route
      path="/"
      exact
      render={() => <Redirect to="/Home"></Redirect>}
    ></Route>
    <Route path="/Home" component={Home}></Route>
    <Route path="/Withdraw" component={Withdraw}></Route>
    <Route path="/InviteDivi" component={InviteDivi}></Route>
    <Route path="/Task/:id" component={Task}></Route>
  </Switch>
</BrowserRouter>;
```

### 页面跳转

Navlink(Link)标签跳转，或者 js 方法跳转

#### 传参

- 方式一 通过 params

```bash

1.路由表中

<Route path=' /sort/:id ' component={Sort}></Route>

2.Link 处

HTML 方式

<Link to={ ' /sort/ ' + ' 2 ' }  activeClassName='active'>XXXX</Link>

JS 方式
this.props.history.push( '/sort/'+'2' )

3.sort 页面

通过 this.props.match.params.id 就可以接受到传递过来的参数（id）

```

- 方式 二：通过 query
  注意：(react-router-dom5.2 版本，query 传参不能拼接在地址栏中，但是可以获取，原因还在查找中)

```bash

  前提：必须由其他页面跳过来，参数才会被传递过来
  注：不需要配置路由表。路由表中的内容照常：<Route path='/sort' component={Sort}></Route>
  1.Link 处
  HTML 方式
  <Link to={{ path : ' /sort ' , query : { name : 'sunny' }}}>

  JS方式
  this.props.history.push({ path : '/sort' ,query : { name: ' sunny'} })

  2.sort页面
  this.props.location.query.name

```

- 方式 三：通过 state

```bash

  同 query 差不多，只是属性不一样，而且 state 传的参数是加密的，query 传的参数是公开的，在地址栏
  1.Link 处
   HTML 方式：
  <Link to={{ path : ' /sort ' , state : { name : 'sunny' }}}>

  JS 方式：
  this.props.history.push({ pathname:'/sort',state:{name : 'sunny' } })

   2.sort 页面
   this.props.location.state.name

```
