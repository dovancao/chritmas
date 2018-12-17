import React, { Component } from 'react';
import './App.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

class App extends Component {

  state = {
    click_id: 1
  }

  changeNextView = () => {
    this.setState ({
      click_id: 2
    })
  }

  changeLastView = () => {
    this.setState ({
      click_id: 3
    })
  }

  render() {
    let mHTML;

    if(this.state.click_id === 1) {
      mHTML = (
        <div>
          <div className="image-top">
            <img src={require('./santa.png')} width="300" height="300" alt="santa"></img>
          </div>
          <h1 className="kreep">
            <button className="button" onClick={this.changeNextView}>All I Want For Christmas Is US</button>
          </h1>
      </div>
      )
    } else if (this.state.click_id === 2) {
      mHTML = (
        <div>
          <h1 className="kreep">
            <button className="button" onClick={this.changeLastView}>Bốc thăm</button>
          </h1>
          <ListGroup className="list-group">
            <ListGroupItem color="success">
              Mục đích
              <ul>
                <li>Tạo cơ hội cho mọi người tìm hiểu nhau và gắn kết mọi người hơn</li>
                <li>Một phần không thể thiếu trong đêm giáng sinh là quà - những món quà ý nghĩa, bất ngờ từ những người bạn bất ngờ, sẽ là điều không thể quên trong đêm cuối năm 2018</li>
                <li>Mọi người có khoảng thời gian vui vẻ, xúc động và hồi hộp, hứa hẹn sẽ là một kỷ niệm vô cùng đáng nhớ!</li>
              </ul>
            </ListGroupItem>
            <ListGroupItem color="info">
              Mọi người có 1 tuần để chuẩn bị quà, dự kiến game diễn ra trong khoảng 1 tiếng
            </ListGroupItem>
            <ListGroupItem color="warning">
              Luật chơi
              <ul>
                <li>Tất cả mọi người xác nhận tham gia X-Mas Party sẽ có tên trong các lá thăm, lá thăm sẽ đảo ngẫu nhiên và mỗi người sẽ rút một lá</li>
                <li>Ai rút được tên người nào thì sẽ có nhiệm vụ tặng cho người đó một món quà vào X-Mas Night</li>
                <li>Tất cả mọi người phải GIỮ BÍ MẬT TUYỆT ĐỐI về lá thăm mà mình rút được, về món quà mà mình chọn mua. Không ai được biết ai tặng quà gì cho ai, hoặc ai bốc được tên ai. Nếu để lộ thì người đó sẽ bị loại khỏi game.</li>
                <li>Vào X-Mas Night, thời khắc chia quà cũng đến. Tất cả quà sẽ được chất tại một vị trí thật đẹp. Từng người sẽ lên tìm món quà đề tên mình, hồi hộp bóc quà, nêu cảm nghĩ về món quà (khen, chê, khóc, cười, kể chuyện...) </li>
                <li>Tiếp theo phải ĐOÁN ra được ai là người tặng món quà đó cho mình.</li>
                <li>Nếu bạn đoán sai, sẽ chẳng sao/hoặc chịu một hình phạt do mọi người nghĩ ra</li>
                <li>Bất kể bạn đoán là ai, thì giây phút quan trọng là người tặng quà cho bạn cũng sẽ lộ diện và hai bạn có thể trao nhau một chiếc hug thật nồng ấm trong sự bất ngờ (kiss, hay gì cũng được tùy các bạn thích).</li>
                <li>Sau đó người tặng quà cho bạn sẽ phải trải lòng lý do lại chọn món quà đó cho bạn, và chúc bạn thêm, nếu muốn.</li>
              </ul>
            </ListGroupItem>
            <ListGroupItem color="danger">
              Một số lưu ý
              <ul>
                <li>Món quà hợp lệ: Được gói và bọc kín đáo, để lúc bóc ra cho hấp dẫn và hồi hộp :)) Nhớ đề tên người nhận quà lên trên vỏ hộp quà nhé, không ai biết quà nào của ai đâu!</li>
                <li>Trong quá trình từng người lên đoán xem ai tặng quà mình, các thành viên còn lại được phép chém gió đánh lạc hướng để người đoán đoán sai</li>
                <li>Do các bạn tự nghiên cứu partner của mình, tự chọn mua. Không giới hạn về mặt giá trị. Khăn, tất, bánh, thẻ game,... cái gì cũng có thể là quà!</li>
                <li>Đây là game để mọi người có cơ hội tìm hiểu nhau thêm. Một khi đã join game, chúc các bạn dành thời gian để tìm được món quà thật ý nghĩa tặng cho đối tượng của mình! Và chúc bạn cũng sẽ nhận được một món quà hết sức ý nghĩa từ ai đó</li>
                <li>Game mang tính hấp dẫn, hồi hộp, vậy nên điều quan trọng nhất là MỌI THỨ PHẢI BÍ MẬT TỜI PHÚT CHÓT! Mong tất cả sẽ tôn trọng luật chơi, để có thể có một X-Mas game thật thành công và nhiều điều bất ngờ nhé!</li>
              </ul>
            </ListGroupItem>
          </ListGroup>
          <h1 className="kreep">
            <button className="button" onClick={this.changeLastView}>Bốc thăm</button>
          </h1>
        </div>
      )
    } else {
      mHTML = (
        <div>
          
        </div>
      )
    }


    return (
      <div className="App">
        <div className="container">
          {mHTML}
        </div>
      </div>
    );
  }
}

export default App;
