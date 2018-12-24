import React, { Component } from 'react';
import './App.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import huong4 from './huong4.png'
import huong3 from './huong3.png'
import huong2 from './huong2.png'
import huong1 from './huong1.png'
import huong5 from './huong5.png'

const items = [
  {
    src: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/48991435_130843331256759_7494471378922373120_o.jpg?_nc_cat=107&_nc_ht=scontent.fhan2-3.fna&oh=7586da72378918639825c55366ea6e9f&oe=5C8D9CF5',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/48411716_130843277923431_2804120092416147456_o.jpg?_nc_cat=109&_nc_ht=scontent.fhan2-3.fna&oh=c06326e2f1c783ecab5a346cdb87b079&oe=5CCF8EFD',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/48422956_130843307923428_398604004797448192_o.jpg?_nc_cat=101&_nc_ht=scontent.fhan2-1.fna&oh=0d76c3404222cc6a73a88a3e9c4d613c&oe=5C9F44C3',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/48412538_130843347923424_539953989848924160_o.jpg?_nc_cat=107&_nc_ht=scontent.fhan2-3.fna&oh=18d112f45516a0e76cb345c379bad987&oe=5C9F7151',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/48416987_130843297923429_4145772578952183808_o.jpg?_nc_cat=100&_nc_ht=scontent.fhan2-4.fna&oh=9d4c76bdbd2ffad9e0d4be0dd06bbcba&oe=5CD014DA",
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <div className="container">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default App;
