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
```jsx
const Picture = (props) => {
    return (
        <div>哈哈</div>
    )
}

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
组件内部，所有参数都放在 `this.props` 属性上。通过 `this.props[key]` 读取 

组件内部不能嵌套 DOM
> Warning: validateDOMNesting(...): \<p> cannot appear as a descendant of \<p>

组件内部的可使用不同的状态，记录在 `this.state` 对象上
组件内部，`this.setState({val: 1})` 函数触发更新（调用 setState()后，会自动触发 render() 函数，更新UI）