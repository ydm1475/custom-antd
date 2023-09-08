import Button, { ButtonType, ButtonSizeEnum } from "./compoents/Button";

function App() {
  return (
    <div className="App">
      hello
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
