import React, { useState, FC } from "react";
import Button, { ButtonType, ButtonSizeEnum } from "./compoents/Button";
import Menu from "./compoents/Menu";
import MenuItem from "./compoents/Menu/item";
import SubMenu from "./compoents/Menu/subMenu";
import { faCoffee, fas } from "@fortawesome/free-solid-svg-icons";
import Icon from "./compoents/Icon";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas);

const Child: FC<any> = ({ id }) => {
  const [count, setCount] = useState(0);
  return <div onClick={() => {
    setCount(count + 1);
  }}>{count}</div>
}
const App = () => {
  const [bol, setBol] = useState(true);

  return <div style={{ margin: '30px' }}>
    <Button onClick={() => {
      setBol(!bol);
    }}>点击切换</Button>
    {
      bol
        ? <Child id={10} key={10} />
        : <Child id={11} key={11} />
    }
    <div>bol的值： {bol ? 'true' : "false"}</div>
  </div>
}


function App1() {
  return (
    <div className="App">
      {/* <FontAwesomeIcon icon={faCoffee} size={'10x'}></FontAwesomeIcon> */}
      <Icon icon={faCoffee} theme="primary" size="10x"></Icon>

      <Menu
        // mode="vertical"
        defaultOpenSubMenus={['3']}
        defaultIndex={'0'} onSelect={(index) => {
          console.log('index', index);
        }}>
        <MenuItem >color link1</MenuItem>
        <MenuItem>color link2</MenuItem>
        <MenuItem disabled>color link3</MenuItem>
        <SubMenu title="dorpdown">
          <MenuItem >hello</MenuItem>
          <MenuItem >World</MenuItem>
          <MenuItem disabled>yes</MenuItem>
        </SubMenu>
      </Menu>
      <Button
        size={ButtonSizeEnum.Small}
        autoFocus
        onClick={() => {
          console.log("111");
        }}
      >
        这是我的第一个按钮
      </Button>
      <br />
      <Button disabled> 真就给我禁用了呗</Button>
      <br />
      <Button
        className="hello"
        btnType={ButtonType.Primary}
        size={ButtonSizeEnum.Large}
      >
        Hello
      </Button>
      <br />
      <Button size={ButtonSizeEnum.Large} btnType={ButtonType.Danger}>
        World
      </Button>
      <br />
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">
        跳转吧，蛋炒饭
      </Button>
      <br />
      <Button
        disabled
        btnType={ButtonType.Link}
        href="https://www.baidu.com"
        onClick={() => {
          console.log("8");
        }}
      >
        大事不好，我被禁用了
      </Button>
    </div>
  );
}

export default App;
