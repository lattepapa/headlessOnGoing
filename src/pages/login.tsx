import * as React from 'react'
import styled from 'styled-components'
import BlackButton from '../components/Button/BlackButton'
import Layout from '../components/layout'
import SocialBox from '../components/Social/SocialBox'

function LoginPage(props: any) {
    return (
        <Layout>
            <Wrapper>
                <InnerWrapper>
                    <div style={{ minWidth: '400px' }}>
                        <form>
                            <header>
                                <h1>ログイン</h1>
                                <p>メールアドレスとパスワードを入力してください。</p>
                            </header>
                            <InputWrapper>
                                <Input placeholder="メールアドレス" />
                            </InputWrapper>
                            <InputWrapper>
                                <button style={{ position: 'absolute', top: '35%', right: '12px', fontSize: '10px', color: 'gray' }}>
                                    パスワードをお忘れの方
                                </button>
                                <Input placeholder="パスワード" />
                            </InputWrapper>
                            <BlackButton type="submit">ログイン</BlackButton>
                            <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0 0 0' }}>
                                <span style={{ color: 'gray', lineHeight: '1.65', fontSize: '14px' }}>非会員のお客様</span>
                                <a style={{ fontSize: '14px' }} href="/signup">
                                    アカウントを作る
                                </a>
                            </div>
                        </form>
                        <SocialBox />
                    </div>
                </InnerWrapper>
            </Wrapper>
        </Layout>
    )
}
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    min-height: 600px;
`
export const InnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    header {
        margin-bottom: 10px;
        text-align: center;
        h1 {
            font-size: 20px;
            letter-spacing: '0.2em';
            text-transform: uppercase;
        }
        p {
            margin-top: 10px;
            margin-bottom: 24px;
        }
    }
`
export const InputWrapper = styled.div`
    position: relative;
    margin-bottom: 15px;
`
export const Input = styled.input`
    width: 100%;
    padding: 12px 14px;
    border-radius: 0;
    width: 100%;
    line-height: normal;
    resize: none;
    transition: border-color 0.1s ease-in-out;
    background: transparent;
    border: 1px solid lightgray;
`
export default LoginPage
