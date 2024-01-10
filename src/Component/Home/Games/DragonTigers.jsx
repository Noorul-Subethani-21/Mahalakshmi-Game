import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Box,
  Button,
  Card,
  Center,
  ChakraProvider,
  Flex,
  Icon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Tooltip,
  WrapItem,
  Text,
  Td,
  Tr,
  Tbody,
  Th,
  Thead,
  Table,
  border,
} from "@chakra-ui/react";

import React from "react";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import DescriptionIcon from '@mui/icons-material/Description';
import LaptopIcon from '@mui/icons-material/Laptop';
import video from "../Games/GameVideo/DragonTiger.mp4";
import OrangeCoin from "../../images/OrangeCoin.svg";
import BrownCoin from "../../images/BrownCoin.svg";
import GreenCoin from "../../images/GreenCoin.svg";
import BlueCoin from "../../images/BlueCoin.svg";
import VioletCoin from "../../images/VioletCoin.svg";
import RedCoin from "../../images/RedCoin.svg";
import undo from "../../images/undo.png";
import reset from "../../images/reset.png";
import dragon from '../../images/Dragon.svg';
import tiger from '../../images/Tiger.svg';
import leafcard from '../../images/leafcards.png';
import flowercard from '../../images/flowercards.png';
import heartcard from '../../images/heartcards.png';
import diamondcard from '../../images/diamondcards.png';
import CircleIcon from '@mui/icons-material/Circle';
import circle from '../../images/circle.svg';
import { Link } from "react-router-dom";
const coins = [
  { value: "100", src: OrangeCoin },
  { value: "500", src: BrownCoin },
  { value: "1k", src: GreenCoin },
  { value: "5k", src: BlueCoin },
  { value: "10k", src: VioletCoin },
  { value: "25k", src: RedCoin },
];
const containerStyle = {
  display: "flex",
  marginTop:'50px',
  width:'50%',
  padding:'20px',
  height:'100%',
  marginLeft:'20px',
  background:'linear-gradient(180deg,#eab8be,#b1c5d6)'
};

const roundStyle = {
  borderRadius: "50%",
  width: "50vh",
  height: "15vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",  
  background: "linear-gradient(180deg,#71d178,#105915 79.2%)",
  fontSize:'18px',
  fontWeight:'bold'
};

const upperHalfStyle = {
  borderBottom: "1px solid #fff",
  width: "100%",
  height:'500%',
  textAlign: "center",
  color:'White',
  
};

const lowerHalfStyle = {
  width: "100%",
  height:'500%',
  textAlign: "center",
  color:'White',
  
};

const boxStyle = {
  width: "100%",
  height: "100%",
  textAlign: "center",
   borderRadius:'10px',
    background: "linear-gradient(180deg,#e38484,#821515)",
    color:'White',
  border:'1px solid #fff'
};
const boxStyles = {
  width: "100%",
  borderRadius:'10px',
  height: "100%",
  textAlign: "center",
    border: "1px solid white",
   background: "linear-gradient(180deg,#84b8e3,#155082)",
   color:'White',

};






const DragonTiger = () => {
  return (
    <ChakraProvider >
      <Box width="85%">
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', fontFamily: 'Roboto cursive', fontSize: '20px', marginLeft:'3%' }}>
          <h1 style={{ fontWeight: 'Bold', marginTop: '10px' }}>DRAGON TIGER</h1>
          <button style={{ border: '2px solid black', padding: '8px', borderRadius: '10px' }}> <DescriptionIcon />Rules</button>
        </div>

        {/* Video Section */}
        <Box
          flex="1"
          bgColor="#fff"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          height="500px"
          p={2}
        >
          <AspectRatio marginTop="1%"  width="700%" height="500px" borderRadius="10px" controls>
            <iframe title="naruto" src={video} allowFullScreen style={{ objectFit: "cover", borderRadius: "10px", width: '68%' }} />
          </AspectRatio>
          <div  style={{display:'flex', flexDirection:'column', marginBottom:'15%', }}>
              <div style={{display:'flex', flexDirection:'row', background:'Linen',  borderRadius:'2px', justifyContent:'space-around', width:'200%', padding:'10px',marginBottom:'15px' }}>
              <div  style={{display:'flex', flexDirection:'row', }}>
                <LaptopIcon />
                 <p>demo123_4316</p>
              </div>
               <div  style={{display:'flex', flexDirection:'row',  }}>
                 <p>Theme</p>
                <CircleIcon  style={{background:'black',color:'#fff', padding:'2px', marginLeft:'15px'}}/>
                 </div>
              </div>
          <div style={{background:'black', borderRadius:'5px', display:'flex',  flexDirection:'row', width:'200%', padding:'10px', marginBottom:'60%', }}>
         <div style={{background:'#fff', marginLeft:'10%', width:'40%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center',  }}>
          <img src={circle} style={{height:'50%', marginLeft:'10%'}} alt="Image" />
          <p>Avaliable Credit Exposure</p>
          
         </div>
         <div style={{background:'#e27602', display:'flex', flexDirection:'column', width:'40%', }}>
    <span style={{display:'flex', justifyContent:'center' , fontSize:'20px', fontWeight:'bold'}}>
      0
    </span>
    <span style={{
      
      display:'flex', justifyContent:'center' , fontSize:'20px', fontWeight:'bold'}}>
      0
    </span>
         
      </div>
         </div>
      </div>
        </Box>

        {/* Gameplay Section */}
        <div style={{display:'flex', flexDirection:'row', marginTop:'20px'}}>
         <div style={{display:'flex', flexDirection:'row', }}>
          <span style={{border:'1px solid orange' , padding:'10px',width:'10%', height:'70%', margin:'5px', textAlign:'center'}}>T</span>
          <span style={{border:'1px solid orange' , padding:'10px',width:'10%', height:'70%',margin:'5px', textAlign:'center'}}>T</span>
          <span style={{border:'1px solid orange' , padding:'10px',width:'10%', height:'70%', margin:'5px', textAlign:'center'}}>D</span>
          <span style={{border:'1px solid orange' , padding:'10px',width:'10%', height:'70%', margin:'5px', textAlign:'center'}}>D</span>
          <span style={{border:'1px solid orange' , padding:'10px',width:'10%', height:'70%', margin:'5px', textAlign:'center'}}>D</span>
          <span style={{border:'1px solid orange' , padding:'10px',width:'10%', height:'70%', margin:'5px', textAlign:'center'}}>D</span>
          <span style={{border:'1px solid orange' , padding:'10px',width:'10%', height:'70%', margin:'5px', textAlign:'center'}}>Ti</span>
          <span style={{border:'1px solid orange' , padding:'10px',width:'10%', height:'70%', margin:'5px', textAlign:'center'}}>T</span>
          <span style={{border:'1px solid orange' , padding:'10px',width:'10%', height:'70%', margin:'5px', textAlign:'center'}}>D</span>
          <span style={{border:'1px solid orange' , padding:'10px',width:'10%', height:'70%', margin:'5px', textAlign:'center'}}>D</span>
         </div>
         <div style={{marginLeft:'20px'}}>
          <p>Round ID</p>
          <span>1578475575 47683</span>
         </div>
         <div style={{marginLeft:'50px'}}>
          <button style={{background:'#e27602', padding:'5px', borderRadius:'10px', color:'#fff', fontWeight:'bold',position:'relative', right:'40px'}}>Player Histroy</button>
         </div>
        </div>
        <div style={{ width: "55%",  display: "flex", flexDirection: "row", marginTop:'10px' }}>
          <p style={{ display: "flex", flexDirection: "column" }}>
            Classic View <Link to='/DragonTiger'><ToggleOffIcon /></Link> 
          </p>

          <div style={{ marginLeft:'10px', width: "40%" }}>
          <p
            style={{
              color: "orange",
              fontFamily: "Roboto Condensed",
              fontSize: "15px",
              fontWeight: "500",
              marginLeft:'10px'
            }}
          >
            Last Win
          </p>
          <span style={{ color: "#000", marginLeft: "20px" }}>0</span>
        </div>
        <div style={{ marginLeft: "1%", width: "150%" }}>
          <p
            style={{
              color: "orange",
              fontFamily: "Roboto Condensed",
              fontSize: "15px",
              marginLeft: "60%",
              fontWeight: "500",
              
            }}
          >
            Total Bit
          </p>
          <span style={{ color: "#000", marginLeft: "50px" }}>0</span>
        </div>
        <div
          className="coin"
          style={{
            background: "rgb(243, 242, 242)",
            border: "1px solid rgb(230, 203, 146)",
            borderRadius: "40px",
            width: "600%",
            marginLeft: "10%",
            padding: "10px",
            gap: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {coins.map((coin, index) => (
            <div
              key={index}
              className="coin-item"
              style={{
                position: "relative",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver="this.style.transform='scale(1.5)'"
              onMouseOut="this.style.transform='scale(1)"
            >
              <img
                src={coin.src}
                style={{ width: "900%", height: "100%" }}
                alt={`Coin ${coin.value}`}
              />
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {coin.value}
              </span>
            </div>
          ))}
        </div>
        <div className="box" style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="box1"
            style={{
              border:'1px solid orange',
              borderRadius: "8px",
              height: "45px",
              display: "flex",
              flexDirection: "column",
              padding: "1px",
              marginLeft: "40px",
              marginTop:'10px'
            }}
          >
            <img
              src={undo}
              style={{ height: "20px", width: "20px", marginLeft: "10px" }}
              alt=""
            />
            <span>Undo</span>
          </div>
          <div
            className="box2"
            style={{
              border:'1px solid orange',
              borderRadius: "8px",
              display: "flex",
              height: "45px",
              flexDirection: "column",
              padding: "2px",
              marginLeft: "8px",
              marginTop:'10px'
            }}
          >
            <img
              src={reset}
              style={{ height: "20px", width: "20px", marginLeft: "10px" }}
              alt=""
            />
            <span>Reset</span>
          </div>
        </div>
      </div>
    
          
            <div style={containerStyle}>
              <div style={boxStyle}>Dragon
            
              <img src={dragon} alt="" style={{marginLeft: "92px", marginTop:'30px',}} />
              <span>1.98</span>
              </div>
              <div style={roundStyle}>
                <div style={upperHalfStyle}>TIE 11</div>
                <div style={lowerHalfStyle}> SUITED TIE 11</div>
              </div>
              <div style={boxStyles}>Tiger
            
              <img src={tiger} alt="" style={{marginLeft: "80px", marginTop:'30px'}} />
              <span>1.98</span>
  </div>
  </div>
  
  <div style={{display:'flex', flexDirection:'row', gap:'3%', marginTop:'20px'}} >
         <div>
            <p>DRAGON ODD-EVEN</p>
            <div style={{ background:'#eab8be', width:'110%',  border:'1px solid #eab8be', padding:'10px', display:'flex', flexDirection:'row',justifyContent:'space-around',textAlign:'center' ,height:'80%', }}>
              <div style={{border:'1px solid gainsboro',background:'linear-gradient(180deg, #fff, #dadada)', borderRadius:'10px', height:'90%',width:'35%', marginTop:'5px',}}><p>Even</p> <span>2.1</span></div>
              <div style={{border:'1px solid gainsboro', background:'linear-gradient(180deg, #fff, #dadada)', borderRadius:'10px', height:'90%',width:'35%', marginTop:'5px', }}><p>Odd</p> <span>1.8</span></div>
            </div>
         </div>


         <div>
            <p>DRAGON COLOR</p>
            <div style={{ background:'#eab8be', width:'110%', border:'1px solid #eab8be ', padding:'10px', display:'flex', flexDirection:'row',justifyContent:'space-around',textAlign:'center' ,height:'80%', }}>
              <div style={{border:'1px solid gainsboro', background:'linear-gradient(180deg, #fff, #dadada)', borderRadius:'10px', height:'90%',width:'35%', marginTop:'5px',}}><p style={{ color:'red'}}>♥ ♦</p> <span>2.1</span></div>
              <div style={{border:'1px solid gainsboro', background:'linear-gradient(180deg, #fff, #dadada)', borderRadius:'10px', height:'90%',width:'35%', marginTop:'5px', }}><p> ♣ ♣ </p> <span>1.8</span></div>
            </div>
         </div>


         <div>
            <p>TIGER ODD-EVEN</p>
            <div style={{ background:'#b8ccea', width:'110%', border:'1px solid #b8ccea  ', padding:'10px', display:'flex', flexDirection:'row',justifyContent:'space-around',textAlign:'center' ,height:'80%', }}>
              <div style={{border:'1px solid gainsboro', background:'linear-gradient(180deg, #fff, #dadada)', borderRadius:'10px', height:'90%',width:'35%', marginTop:'5px',}}><p>Even</p> <span>2.1</span></div>
              <div style={{border:'1px solid gainsboro', background:'linear-gradient(180deg, #fff, #dadada)', borderRadius:'10px', height:'90%',width:'35%', marginTop:'5px', }}><p>Odd</p> <span>1.8</span></div>
            </div>
         </div>

        
         <div>
            <p>TIGER COLOR</p>
            <div style={{ background:'#eab8be', width:'130%', border:'1px solid #eab8be ', padding:'10px', display:'flex', flexDirection:'row',justifyContent:'space-around',textAlign:'center' ,height:'80%', }}>
              <div style={{border:'1px solid gainsboro', background:'linear-gradient(180deg, #fff, #dadada)', borderRadius:'10px', height:'90%',width:'35%', marginTop:'5px',}}><p style={{ color:'red'}}
              >♥ ♦</p> <span>2.1</span></div>
              <div style={{border:'1px solid gainsboro', background:'linear-gradient(180deg, #fff, #dadada)', borderRadius:'10px', height:'90%',width:'35%', marginTop:'5px', }}><p> ♣ ♣ </p> <span>1.8</span></div>
            </div>
         </div>




         </div>
    
        <div  style={{display:'flex', flexDirection:'row',  marginLeft:'10px', gap:'10px'}} >
            <div style={{display:'flex', flexDirection:'row' , gap:'20px', padding:'20px' }}>
              <div style={{ background:'linear-gradient(180deg,#eadcde,#d6b9bc 80.73%)', padding:'10px'}}>
                <img src={leafcard} alt="image" style={{width:'30px', height:'50px'}} />
              </div>
              <div style={{ background:'linear-gradient(180deg,#eadcde,#d6b9bc 80.73%)', padding:'10px'}}>
                <img src={heartcard} alt="image" style={{width:'30px', height:'50px'}} />
              </div>
              <div style={{ background:'linear-gradient(180deg,#eadcde,#d6b9bc 80.73%)', padding:'10px'}}>
                <img src={flowercard} alt="image" style={{width:'30px', height:'50px'}} />
              </div>
              <div style={{ background:'linear-gradient(180deg,#eadcde,#d6b9bc 80.73%)', padding:'10px'}}>
                <img src={diamondcard} alt="image" style={{width:'30px', height:'50px'}} />
              </div>
            </div>
            <div style={{display:'flex', flexDirection:'row', gap:'20px', padding:'20px' }}>
              <div style={{ background:'linear-gradient(180deg,#e2edf5,#adc0d1)', padding:'10px'}}>
                <img src={leafcard} alt="image" style={{width:'30px', height:'50px'}} />
              </div>
              <div style={{ background:'linear-gradient(180deg,#e2edf5,#adc0d1)', padding:'10px'}}>
                <img src={heartcard} alt="image" style={{width:'30px', height:'50px'}} />
              </div>
              <div style={{background:'linear-gradient(180deg,#e2edf5,#adc0d1)', padding:'10px'}}>
                <img src={flowercard} alt="image" style={{width:'30px', height:'50px'}} />
              </div>
              <div style={{ background:'linear-gradient(180deg,#e2edf5,#adc0d1)', padding:'10px'}}>
                <img src={diamondcard} alt="image" style={{width:'30px', height:'50px'}} />
              </div>
          </div>
           
          </div>
           

        
      </Box>
    </ChakraProvider>
  );
};

export default DragonTiger;
