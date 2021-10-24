import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      shotCount: 0,
      headsCount: 0,
      tailsCount: 0,
    };
  }

  randomSide = () => {
    let number = Math.floor(Math.random() * 2);
    if (number === 1) {
      this.setState({ side: "tura" });
      this.setState({ headsCount: this.state.headsCount + 1 });
    } else {
      this.setState({ side: "yazi" });
      this.setState({ tailsCount: this.state.tailsCount + 1 });
    }
  };

  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ shotCount: this.state.shotCount + 1 });
    this.randomSide();
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam Atış: <strong> {this.state.shotCount} </strong>
        </p>
        <p>
          Tura sayısı: <strong> {this.state.headsCount} </strong>
        </p>
        <p>
          Yazı sayısı: <strong> {this.state.tailsCount} </strong>
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
