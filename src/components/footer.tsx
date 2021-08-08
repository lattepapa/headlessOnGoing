import * as React from 'react'
import { footerStyle } from './footer.module.css'
import styled from 'styled-components'
function Footer() {
    return (
        <footer className={footerStyle}>
            <Container>
                <div className="footer_inner">
                    <div className="footer_block">Finger Suit</div>
                    <div className="footer_block_links_left">
                        <h3>About</h3>
                        <div>FINGER SUITについて</div>
                        <div>キャンペーン</div>
                    </div>
                    <div className="footer_block_links_right">
                        <h3>ご利用について</h3>
                        <div>よくある質問</div>
                        <div>利用規約</div>
                        <div>特商法に基づく表記</div>
                        <div>決済・配送</div>
                        <div>交換・返品</div>
                        <div>お問い合わせ</div>
                        <div>メールが届かない場合</div>
                        <div>Terms of Service</div>
                        <div>Refund of Policy</div>
                    </div>
                    <div className="footer_block_bottom">
                        <h3>LINE 友だち追加</h3>
                        <span>最新おトク情報やLINE 限定キャンペーン情報をお届け！</span>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
const Container = styled.div`
    background-color: black;
    .footer_inner {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-left: -0px;
        margin-right: -0px;
        .footer_block {
            width: 100%;
            height: 50px;
        }
        .footer_block_links_left {
            float: left;
            width: 50%;
            height: 300px;
        }
        .footer_block_links_right {
            float: right;
            width: 50%;
            height: 300px;
        }
        .footer_block_bottom {
            width: 100%;
            height: 100px;
        }
    }
`
export default Footer
