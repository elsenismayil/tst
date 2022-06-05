import React,{useState} from "react";
import "../Css/Banner.css";
import shortid from "shortid";
import BannerItem from "../Companents/BannerItem";
import Carousel from 'react-elastic-carousel';


export default function Banner() {
const [list,setList]=useState(
  [
    {
      title:"MindHunter", desc:"Catching a criminal often requires the authorities to get inside the villain's mind to figure out how he thinks. That's the job of FBI agents Holden Ford and Bill Tench.", img:"https://flxt.tmsimg.com/assets/p17153590_b_h9_aa.jpg", link:"https://www.youtube.com/watch?v=lu9B-c4fM9M"
      
    },
    {
      title:"Dark", desc:"Children start vanishing from the German town of Winden,bringing to light the fractured relationships, double lives, and the dark pasts of four families living there, and unfurling a mystery that spans four generations.", img:"https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWKGy4K_1_dvtIW7celhWo6bXLMybAQPY7sAzW2aoc6gUizViVh4WXlTfUy-wJF09wIxphPT0fFx-LwBRmcJ9dEZ3HiR.jpg?r=077", link:"https://www.youtube.com/watch?v=rrwycJ08PSA"
    }, {
      title:"Stargate Universe", desc:"With Humanity Teetering on the bring of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.", img:"https://kevinallen4325.github.io/netflix-react/static/media/intertellar.5fc9d0d2.jpg", link:"https://www.youtube.com/watch?v=0HyD3aKFTkA"
    },
    {
      title:"YOU", desc:"The first season follows the story of Joe Goldberg, a bookstore manager in New York, who upon meeting Guinevere Beck, an aspiring writer, becomes infatuated with her. He feeds his toxic obsession using social media and other technology to track her presence and remove obstacles to their romance.",img:"https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbhAVu_8XArGfZYDHUs-UVBztb6aZZuHrk1PwJlZ7NO_2gxWhc0xqtdMc2Ye9VJ35FjKVuoTBihu0fNPxtq6IGVzwB8V.webp?r=090", link:"https://www.youtube.com/watch?v=srx7fSBwvF4"
    }
  ]
)

  return (
   <div className="my_carousel">
        <Carousel>
       {list.map((i)=><BannerItem key={shortid()} title={i.title} desc={i.desc} link={i.link} img={i.img} />)}
       </Carousel>
   </div>
  
 
  );
}
