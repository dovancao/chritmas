import React, { Component } from 'react';
import './App.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

class App extends Component {

  state = {
    click_id: 1,
    imageSrc: null,
    nameOfPartner: null,
    name: '',
    object: [
      {
        nameOfUrl: "Đỗ Sơn",
        imageURL: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/45340040_102780117396414_5874099579577696256_o.jpg?_nc_cat=108&_nc_ht=scontent.fhan2-3.fna&oh=bb68a88b0b63739b8bc9493dfe2c16cf&oe=5CD90AD7`",
        sex: 'male'
      },
      {
        nameOfUrl: "Doanh Quảng Đặng",
        imageURL: "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-0/p206x206/32945217_789514634592490_8846035610595491840_n.jpg?_nc_cat=106&_nc_ht=scontent.fhan2-1.fna&oh=90f58a38689795a28625cef628de6ae3&oe=5CAC1842",
        sex: 'male'
      },
      {
        nameOfUrl: "Đông Vũ",
        imageURL: "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/47378641_2415043392056696_829413302172909568_o.jpg?_nc_cat=104&_nc_ht=scontent.fhan2-4.fna&oh=800c85e9e913b7337fbb823a9e0eb632&oe=5C9ECE8F",
        sex: 'male'
      },
      {
        nameOfUrl: "Hatter Minh",
        imageURL: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-0/p206x206/23435080_895684483931414_6852120739085013102_n.jpg?_nc_cat=109&_nc_ht=scontent.fhan2-3.fna&oh=ea5830ad373be6e526bf0031980f7fb1&oe=5C9B0675",
        sex: 'female'
      },
      {
        nameOfUrl: "Hiếu Hồ",
        imageURL: "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/47284437_1205178412979127_4595918184166457344_o.jpg?_nc_cat=111&_nc_ht=scontent.fhan2-2.fna&oh=400fb298f0cbca6ca9d414133adea225&oe=5C8B88BF",
        sex: 'male'
      },
      {
        nameOfUrl: "Manh Nghia",
        imageURL: "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/28959350_775660199306295_8047655646159437824_n.jpg?_nc_cat=103&_nc_ht=scontent.fhan2-1.fna&oh=a96f407b27fda5b33baff50e0ae4e061&oe=5C9AF0DA",
        sex: 'male'
      },
      {
        nameOfUrl: "Minh Phương",
        imageURL: "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/38733842_550001365402955_155246403277291520_o.jpg?_nc_cat=110&_nc_ht=scontent.fhan2-4.fna&oh=d999cce320a5b8f7d7fcc89cd9dc46d5&oe=5CA1B351",
        sex: 'female'
      },
      {
        nameOfUrl: "Ngoc Dziep",
        imageURL: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-1/c127.442.1229.1229a/s960x960/48332734_2036581983105873_8374731888379559936_o.jpg?_nc_cat=108&_nc_ht=scontent.fhan2-3.fna&oh=a1fc45543583400d00804a50be6b2024&oe=5CA30A7F",
        sex: 'female'
      },
      {
        nameOfUrl: "Nhung Hong Nguyen",
        imageURL: "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-0/p206x206/26731201_840562449485765_1509927851885938266_n.jpg?_nc_cat=103&_nc_ht=scontent.fhan2-1.fna&oh=f274511ca7c04bd0d8b8c470b5d284ce&oe=5C8D4D90",
        sex: 'female'
      },
      {
        nameOfUrl: "Quỳnh Hương",
        imageURL: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/40077546_1166716010143650_2356182370974957568_o.jpg?_nc_cat=107&_nc_ht=scontent.fhan2-3.fna&oh=82700405c45dd3b91890eac81d464d03&oe=5C9DFB7C",
        sex: 'female'
      },
      {
        nameOfUrl: "Phuong Thu Nguyen",
        imageURL: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-1/c0.0.748.748a/48376097_10212986738968102_3960322818893152256_n.jpg?_nc_cat=107&_nc_ht=scontent.fhan2-3.fna&oh=eac68adf70a7d1b6665143abc2470c74&oe=5CD99470",
        sex: 'female',
      },
      {
        nameOfUrl: "Thùy Trang",
        imageURL: "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/36672332_2296091643951872_4845854597547294720_o.jpg?_nc_cat=103&_nc_ht=scontent.fhan2-1.fna&oh=4258d8f8a9628e8aea9f264c833c6151&oe=5C9B5117",
        sex: 'female'
      },
      {
        nameOfUrl: "Trần Minh",
        imageURL: "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/40104088_1083641795133021_6245545350816333824_n.jpg?_nc_cat=110&_nc_ht=scontent.fhan2-2.fna&oh=29a1f218d3a78aaee092c28ec45123c8&oe=5CA27253",
        sex: 'male'
      },
      {
        nameOfUrl: "Trong Manh",
        imageURL: "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/46090960_1645681042203182_6547016836263706624_n.jpg?_nc_cat=106&_nc_ht=scontent.fhan2-1.fna&oh=18609da6d3767c0f2f6281919c54d5bb&oe=5C8FEA45",
        sex: 'male'
      },
      {
        nameOfUrl: "Trung Kiên",
        imageURL: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/46967642_1114079565419143_294401780299595776_n.jpg?_nc_cat=109&_nc_ht=scontent.fhan2-3.fna&oh=93d86204fa6770886f4699f155559d0b&oe=5CACF770",
        sex: 'male'
      }
    ]
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

  changeText = (event) => {
    console.log(event.target.value);
    this.setState({
      name: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault();

    // filter ra array thuộc tính của người quay
    let image_info = this.state.object.filter((imageInfo) => {
      return imageInfo.nameOfUrl === this.state.name
    })

    // filter ra array cac object có giới tính khác ngoai tru người quay
    let rest_info = this.state.object.filter((imageInfo) => {
      return imageInfo.nameOfUrl !== image_info[0].nameOfUrl && imageInfo.sex !== image_info[0].sex
    })
    /// lay random 1 phan tu trong rest_info
    let maxlength = rest_info.length;
    let random_people = Math.floor(Math.random() * maxlength);
    
    // array after filter partner property
    let last_partner = this.state.object.filter((imageInfo) => {
      return imageInfo.nameOfUrl !== rest_info[random_people].nameOfUrl
    });
    let image =  rest_info[random_people].imageURL;
    
    this.setState ({
      nameOfPartner: rest_info[random_people].nameOfUrl,
      imageSrc: image,
      object: last_partner,
      click_id: 3
    });
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
          <div className="image-partner">
            <img src={this.state.imageSrc}  width="300" height="300" alt="partner"></img>
            <h1>{this.state.nameOfPartner}</h1>
            <form onSubmit={this.onSubmit}>
              <div className ="form-group">
                <input 
                  type="text" 
                  name="ten" 
                  placeholder="Tên facebook của bạn"
                  onChange={this.changeText}  
                >
                </input>
              </div>
              <div>
                <button className="btn btn-success" type="submit">Bốc thăm</button>
              </div>
            </form>
          </div>
        </div>
      )
    }

    console.log(this.state.imageSrc);
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
