import * as React from 'react'
import { Wrapper, InnerWrapper, InputWrapper, Input } from './login'
import BlackButton from '../components/Button/BlackButton'
import Layout from '../components/layout'
import SocialBox from '../components/Social/SocialBox'

function SignUpPage(props: any) {
    return (
        <Layout>
            <Wrapper>
                <InnerWrapper>
                    <div style={{ minWidth: '400px' }}>
                        <form>
                            <header>
                                <h1>新規登録</h1>
                                <p>以下の情報を入力してください。</p>
                            </header>
                            <InputWrapper>
                                <Input placeholder="メイ" />
                            </InputWrapper>
                            <InputWrapper>
                                <Input placeholder="セイ" />
                            </InputWrapper>
                            <InputWrapper>
                                <Input placeholder="メールアドレス" />
                            </InputWrapper>
                            <InputWrapper>
                                <Input placeholder="パスワード" />
                            </InputWrapper>
                            <BlackButton type="submit">ログイン</BlackButton>
                        </form>
                        <SocialBox />
                    </div>
                </InnerWrapper>
            </Wrapper>
        </Layout>
    )
}
export default SignUpPage
