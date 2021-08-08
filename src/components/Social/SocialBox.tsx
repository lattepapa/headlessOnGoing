import React from 'react'
import { faFacebookF, faGoogle, faLinkedinIn, faTwitter, faAmazon } from '@fortawesome/free-brands-svg-icons'
import SocialButton from './SocialButton'
const SocialBox: React.FC<any> = (props: any) => {
    const colors: any = { facebook: '#395998', google: '#dd4b39', twitter: '#55acee', linkedin: '#005983', amazon: '#ff9900' }
    return (
        <div>
            <SocialButton name="Facebook" icon={faFacebookF} color={colors.facebook} />
            <SocialButton name="Google" icon={faGoogle} color={colors.google} />
            <SocialButton name="Twitter" icon={faTwitter} color={colors.twitter} />
            <SocialButton name="Linkedin" icon={faLinkedinIn} color={colors.linkedin} />
            <SocialButton name="Amazon" icon={faAmazon} color={colors.amazon} />
        </div>
    )
}

export default SocialBox
