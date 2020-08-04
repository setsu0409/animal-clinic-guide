import React from 'react';
import Style from './Home.module.scss'
import Logo from '../../static/logo_1.png'
import {Button,GridListTile,GridList }from  '@material-ui/core';

import Image_home from '../../static/home.jpg'
import Image_phone from '../../static/phone.png'
import Image_location from '../../static/location.png'
import Head_image from '../../static/store_banner.jpg'
import Timg from '../../static/timg.jpg'
export default class HospitalDetail extends React.Component{
  constructor(props){
    super(props)
    this.state={
      hospitalId:"",//商店id
      tileData:[{img:Image_home,title:"image",author:"tone"},
      {img:Timg,title:"image",author:"tone"},
      {img:Timg,title:"image",author:"tone"},
      {img:Image_home,title:"image",author:"tone"},
      {img:Image_home,title:"image",author:"tone"},
      {img:Image_home,title:"image",author:"tone"},
      {img:Image_home,title:"image",author:"tone"},
      {img:Image_home,title:"image",author:"tone"},
      {img:Image_home,title:"image",author:"tone"},
      
    ],
    }
  }
  componentDidMount(){
    try{
      let array=this.props.location.search.split("=")
      if(array[array.length-1]=="")return
      this.setState({
        hospitalId:array[array.length-1]
      })
    }catch(e){

    }
  }

  render(){
    console.log(this.state.hospitalId,"LLL")
    const {tileData}=this.state
    return(
      <div className={Style['HospitalDetail']}>
        <div className={Style['top-box']}>
          <div className={Style['textb']}>
            <div className={Style['text']}>店舗情報</div>
          </div> 
        </div> 
        <div className={Style['middle-box']}>
          <div className={Style['left']}>
            <img src={Logo}></img>
            <div style={{fontSize:"24px",marginLeft:"10px",marginBottom:"10px"}}>アラタ動物病院</div>
            <div className={Style['des']}>
              <p>
              メッセージ
私は生まれた時から巣鴨でずっと暮らしてきました。
その地元、巣鴨で『アラタ動物病院』を開院させていただいたことは、大変嬉しい事です。
当院は、『かかりつけ医』としてワンちゃん、ネコちゃんが困っていること、もちろんオーナーさんが困っていることに真摯に向き合い、それを解決していく努力をします。&nbsp;
              </p>
              <p>
	            問題を解決する事で、ワンちゃん、ネコちゃん、オーナーさん、みんなが幸せになれる手助けをしてあげられたらと思います。
『こんな事を聞いたら、変かな？』なんて事はありません。お気軽にご相談下さい。
どうぞよろしくお願い致します。&nbsp;
              </p>
              <p>
              【略歴】
平成16年3月 日本獣医畜産大学（現：日本獣医生命科学大学）獣医学科　卒業
平成16年4月 田中動物病院(品川区）　勤務
平成18年6月 谷澤動物病院(墨田区)　勤務
平成21年2月 アルマ動物病院(世田谷区)　勤務
平成24年2月 代々木公園犬猫病院(渋谷区）　勤務
平成26年2月 アラタ動物病院　開院&nbsp;
              </p>
            </div>
          </div>
          <div className={Style['right']}>
            <div className={Style['floating-button ']}>
              <Button variant="contained" color="primary">点我预约</Button>
            </div>
            <div className={Style['des_ph']}>
              <GridList cellHeight={160} className={Style['list']} cols={3}>
                {tileData.map((tile) => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </div>
        </div>
        <div className={Style['buttom-box']}>
          <div className={Style['title-box']}>
            接受宠物种类
          </div>
          <div>
            <table id={Style.animallists}>
            <tbody>
              <tr>
              <td><a id={Style["animallists-l1"]} >イヌ</a></td>
              <td><a id={Style['animallists-l2']} >ネコ</a></td>
              <td><a id="animallists-l3">ウサギ</a></td>
              <td><a id="animallists-l4">ハムスター</a></td>
              <td><a id="animallists-l5" >フェレット</a>)</td>
              <td><a id="animallists-l6" >モルモット</a></td>
              </tr>
              <tr>
              <td><a id="animallists-l7" >リス</a></td>
              <td><a id="animallists-l8" >鳥</a></td>
              <td><a id="animallists-l9">両生類</a></td>
              <td><a id="animallists-l10" >爬虫類</a></td>
              <td><a id="animallists-l12" >魚</a></td>
              <td><a id="animallists-l13" >家畜</a></td>
              </tr>
            </tbody>
            </table>       
          </div>
          <div className={Style['title-box']}>
            診察領域から探す
          </div>
          <table className={Style['column3']} style={{margin:"10px"}}><tbody>
            <tr className={Style['tr']}>
              <td><a>歯と口腔系疾患</a> (1163)</td>
              <td><a>眼科系疾患</a> (1135)</td>
              <td><a >皮膚系疾患</a> (1279)</td>
            </tr>
            <tr>
              <td><a >脳・神経系疾患</a> (1064)</td>
              <td><a >循環器系疾患</a> (1202)</td>
              <td><a >呼吸器系疾患</a> (1113)</td>
            </tr>
              <tr>
              <td><a >消化器系疾患</a> (1148)</td>
              <td><a >肝・胆・すい臓系疾患</a> (994)</td>
              <td><a >腎・泌尿器系疾患</a> (1137)</td>
              </tr>
              <tr>
              <td><a>内分泌代謝系疾患</a> (1049)</td>
              <td><a >血液・免疫系疾患</a> (1026)</td>
              <td><a >筋肉系疾患</a> (1016)</td>
              </tr>
              <tr>
              <td><a >整形外科系疾患</a> (1041)</td>
              <td><a >耳系疾患</a> (1059)</td>
              <td><a >生殖器系疾患</a> (1026)</td>
              </tr>
              <tr>
              <td><a >感染症系疾患</a> (1013)</td>
              <td><a >寄生虫</a> (987)</td>
              <td><a >腫瘍・がん</a> (1247)</td>
              </tr>
              <tr>
              <td><a >中毒</a> (917)</td>
              <td><a>心の病気</a> (684)</td>
              <td><a >東洋医学</a> (199)</td>
              </tr>
              <tr>
<td><a>けが・その他</a> (939)</td>
<td></td>
<td></td>
</tr>
</tbody></table>
        </div>
      </div>
    )
  }
}
