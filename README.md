[TOC]

# [Ant Design 实战教程](https://www.yuque.com/ant-design/course)

## 教程中的命令

```shell
# -y: npm 要求提供的信息，自动回车键标识接收默认值
cnpm init -y

cnpm install umi --save-dev

# script: {dev: umi dev}
cnpm run dev
```

## 疑问

这两种组件定义方式有什么不一样
```js
// 只适合简单的组件
const Picture = (props) => {
    return (
        <div>哈哈</div>
    )
}
//  更正式 更通用的写法
class ShoppingList extends React.Component {
    render () {
        return (
            <div>嘻嘻嘻</div>
        )
    }
}
```

## 必要的点

### JavaScript

#### ES6 模块化

### React

#### JSX
特点是 易写易读


插入 HTML 语法，标签必须闭合；顶层只能有一个根元素

一般原生标签小写，自定义组件标签首字母大写

#### 组件基础

自定义组件必须继承 `React.Component` 基类，必须有一个 `Render` 方法

外部传入的叫参数  
内部的参数叫状态

组件内部，所有参数都放在 `this.props` 属性上。通过 `this.props[key]` 读取 

组件内部不能嵌套 DOM 
这个好像是 警告 p 不能作为 p 元素的后代
> Warning: validateDOMNesting(...): \<p> cannot appear as a descendant of \<p>

组件内部的可使用不同的状态，记录在 `this.state` 对象上
组件内部，`this.setState({val: 1})` 函数触发更新（调用 setState()后，会自动触发 render() 函数，更新UI）

受控组件 | 非受控组件
> 这个组件的状态是否可以被外部修改；一个设计得当的组件应该同时支持 “受控” 和 “非受控” 两种形式
>
> 当开发者不控制组件时，组件自己管理状态；开发者控制组件属性时，组件由属性控制。

#### 组件的生命周期
[第一个组件 - 生命周期方法](https://www.yuque.com/ant-design/course/fd5af7#生命周期方法)  
[进阶功能 - 生命周期](https://www.yuque.com/ant-design/course/lifecycle)

> 组件的运行过程中，存在不同的阶段。React 为这些阶段提供了钩子函数，允许开发者自定义每个阶段自动执行的函数。这些方法统称为生命周期方法 --- lifecycle methods

```js
class Clock extends React.Component {
    
/**
* 组件挂在后
*/
componentDidMount() {}

/**
* 组件卸载前
*/
componentWillUnmount() {}

/**
* 组件 UI 更新后
*/
componentDidUpdate() {}

/**
* 组件挂载是，render 方法第一次执行不会调用
* this.props 和 this.state 变化时 render 执行前调用
* @param nextProps
* @param nextState
* @return true 是否继续执行 render 方法
*/
shouldComponentUpdate(nextProps, nextState) {

}
/**
* render 方法执行前调用，包括组件的第一次挂载；
* 返回新的 state 对象
* 通常用在组件依赖外部输入的参数时
* @param props
* @param state
*/
static getDerivedStateFromProps(props, state) {
    
}

/**
* 每次 DOM 更新之前调用 用来收集 DOM 信息
* 返回值 将作为参数传入 componentDidUpdate() 方法
*/
getSnapshotBeforeUpdate() {
    
}

}
```

### Ant

```jsx
// Item I 大写 ； 最小的导航选项
<Menu.Item />

// 不加 / 会在当前路由后边一直添加
<Link to="/dashboard/analysis">分析页</Link><
```

#### Dva 驱动的过程

静态数据
![Dva 驱动的过程 图1](https://gw.alipayobjects.com/zos/rmsportal/uhUMfTcXxfskqbreAXth.png)

从服务端请求数据
![ Dva 服务器取值 图2](https://gw.alipayobjects.com/zos/rmsportal/ZSCxeNAFqHgKXsyjtpxt.png)

配置代理请求和不配置请求图解
![](https://gw.alipayobjects.com/zos/rmsportal/YiBKIHevTMjvpIAodsOq.png)
