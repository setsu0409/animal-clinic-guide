import React from 'react';
import Style from './Home.module.scss'
import Input from '@material-ui/core/Input';
import {Card, Select,MenuItem,InputLabel,
   Button,Typography,CardMedia ,CardContent,
   CardActions,CardActionArea} from '@material-ui/core';
   import { makeStyles } from '@material-ui/core/styles';
import Image_home from '../../static/home.jpg'

import Image_phone from '../../static/phone.png'
import Image_location from '../../static/location.png'

import Head_image from '../../static/store_banner.jpg'
import Timg from '../../static/timg.jpg'
import firstImg from '../../static/hospitalDesc_img/1.jpg'
import secondImg from '../../static/hospitalDesc_img/2.jpg'
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      areaArray:[{name:"中央区",id:1087},{name:"千代田区",id:1781},{name:"文京区",id:1036},
                  {name:"港区",id:118},{name:"新宿区",id:109},{name:"品川区",id:181},
                  {name:"目黒区",id:170},{name:"大田区",id:141},{name:"世田谷区",id:110},
                  {name:"渋谷区",id:101},{name:"中野区",id:102},{name:"杉並区",id:103},
                  {name:"練馬区",id:104},{name:"板橋区",id:105},{name:"豊島区",id:106},
                  {name:"北区",id:107},{name:"台東区",id:108},{name:"墨田区",id:109},
                  {name:"江東区",id:1100},{name:"荒川区",id:10101},{name:"足立区",id:4101},
                  {name:"葛飾区",id:1801},{name:"江戸川区",id:7101}],//区域数据
      currentArea:"",//当前区域
      varietyArray:[{name:"猫",id:1},{name:"犬",id:2},{name:"魚",id:3},{name:"鳥",id:4}],//种类数组
      currentVariety:"",//当前种类
      hospitalName:"",
      hospitalArray:[{id:1,name:"アラタ動物病院",desc:"私たちは猫や犬などの動物を治療することができます。",phone:"03-5981-6161",address:"〒170-0002 東京都豊島区巣鴨1-23-9 ウエスティIII 1F",desc_image_url:firstImg},
      {id:1,name:"代官山宠物医院",desc:"イヌ ネコ ウサギ ハムスター モルモット 爬虫類",phone:"03-3793-7078",address:"〒150-0022 東京都渋谷区恵比寿南3-7-7",desc_image_url:secondImg},
      {id:1,name:"谷澤動物病院",desc:"私たちは猫や犬などの動物を治療することができます。",phone:"03-3621-4038",address:"〒130-0003 東京都墨田区横川4-7-10",desc_image_url:Timg},
      
    ],
    }
  }
  searchConditionFunc=(flag,e)=>{
    if(flag==1){//区域查询
      this.setState({
        currentArea:e.target.value
      })
    }else if(flag==2){//种类查询
      this.setState({
        currentVariety:e.target.value
      })
    }else if(flag==3){//按名称搜索
      console.log(e,":::::")
      this.setState({
        hospitalName:e.target.value
      })
    }else if(flag==4){//清除搜索
      this.setState({
        currentArea:"",
        currentVariety:"",
        hospitalName:"",
        hospitalArray:[{id:1,name:"医院名称1",desc:"这是描述",phone:"028-38695125",address:"四川省成都市青白江区",desc_image_url:Timg},
      {id:1,name:"医院名称2",desc:"这是描述",phone:"028-38695125",address:"四川省成都市青白江区",desc_image_url:Image_home},
      {id:1,name:"医院名称3",desc:"这是描述",phone:"028-38695125",address:"四川省成都市青白江区",desc_image_url:Timg},
      {id:1,name:"医院名称4",desc:"这是描述",phone:"028-38695125",address:"四川省成都市青白江区",desc_image_url:Image_home},
      {id:1,name:"医院名称5",desc:"这是描述",phone:"028-38695125",address:"四川省成都市青白江区",desc_image_url:Timg}
    ],
      })
    }
  }
  submitFunc=()=>{//表单提交
    const {currentArea,currentVariety,hospitalName}=this.state
    if(currentArea==""&&currentVariety==""&&hospitalName){
      return
    }
    this.setState({
      hospitalArray:[{id:1,name:"医院名称1",desc:"这是描述",phone:"028-38695125",address:"四川省成都市青白江区",desc_image_url:Image_home},
      {id:1,name:"医院名称2",desc:"这是描述",phone:"028-38695125",address:"四川省成都市青白江区",desc_image_url:Timg},
    ]
    })
  } 
  showDetail=(item)=>{
    this.props.history.push('/detail?id='+item.id)
  }
  render() {
    const {currentArea,areaArray,hospitalName,
      varietyArray,currentVariety,hospitalArray}=this.state
  
    return(
      <div className={Style['home-box']}>
          <div className={Style['top-box']}>
            <div className={Style['textb']}>
              <div className={Style['text']}>東京都動物病院ガイド</div> 
            </div>
          </div>
          <div className={Style['home-head-box']}>
            <div style={{textAlign:"center"}}>
              <Card className={Style['card-box']}
               title="动物医院检索"
              //  image='../../static/home.jpg'
              >
                <div style={{margin:"5px 0 5px 5px"}}>
                動物病院の検索
                  {/* 动物医院检索 */}
                </div>
                <div style={{display:"flex",marginBottom:"50px"}}>
                  <div className={Style['search-input-box']}>
                    <InputLabel style={{margin:"0 10px 0 10px"}}>
                    エリアから探す
                      {/* 区域 */}

                    </InputLabel>
                    <Select
                      style={{width:"150px"}}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={currentArea}
                      onChange={this.searchConditionFunc.bind(this,1)}
                    >
                      {
                        areaArray.map((item,index)=>{
                          return(
                              <MenuItem key={index} value={item.id}>{item.name}</MenuItem> 
                          )
                        })
                      }
                    </Select>
                  </div>
                  <div className={Style['search-input-box']}>
                    <InputLabel style={{margin:"0 10px 0 10px"}}>
                      {/* 种类 */}
                      動物の種類から探す
                    </InputLabel>
                    <Select
                      style={{width:"150px"}}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={currentVariety}
                      onChange={this.searchConditionFunc.bind(this,2)}
                    >
                      {
                        varietyArray.map((item,index)=>{
                          return(
                          
                              <MenuItem key={index} value={item.id}>{item.name}</MenuItem> 
                          
                          )
                        })
                      }
                    </Select>
                  </div>
                  <div className={Style['search-input-box']}>
                    <InputLabel style={{margin:"0 10px 0 10px"}}>
                      {/* 名称 */}
                      キーワード検索
                    </InputLabel>
                    <Input
                      name="hospitalName"
                      type={'text'}
                      value={hospitalName}
                      onChange={this.searchConditionFunc.bind(this,3)}
                    /> 
                  </div>
                </div>
                <div style={{display:"flex",margin:"0 0 10px 65%"}}>
                  <Button onClick={this.searchConditionFunc.bind(this,4)} variant="contained" color="primary" style={{marginRight:"10px"}}>
                  クリア
                    {/* 清除条件 */}
                  </Button>
                  <Button variant="contained" color="primary" onClick={this.submitFunc}>
                    {/* 开始检索 */}
                    検索
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          
          <div className={Style['home-foot-box']}>
            {
              hospitalArray.map((item,index)=>{
                return (
                  <Card style={{width:"85%",margin:"auto",marginBottom:"50px"}} onClick={this.showDetail.bind(this,item)}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="640"
                        image={item.desc_image_url}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {item.desc}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          <img src={Image_phone} style={{width:"20px"}}></img> 联系电话：{item.phone}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          <img src={Image_location} style={{width:"20px"}}></img> 地址：{item.address}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions style={{marginLeft:"80%"}}>
                      {/* <Button size="small" color="primary">
                        Share
                      </Button> */}
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                )
              })
            }
            
         
          </div>
      </div>
    )
  }
}

export default Home