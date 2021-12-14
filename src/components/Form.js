import React from 'react';
import '../css/form.css';
import { ReactComponent as Shirt} from "../assets/t-shirt.svg";
import { ReactComponent as Skin} from "../assets/skin.svg";
import { ReactComponent as ManAvatar } from "../assets/man.svg";
import { ReactComponent as WomanAvatar } from "../assets/woman.svg";
import { ReactComponent as SkinColorOne} from "../assets/color-FCCC84.svg";
import { ReactComponent as SkinColorTwo} from "../assets/color-FCD7B8.svg";
import { ReactComponent as SkinColorThree} from "../assets/color-533724.svg";
import { ReactComponent as SkinColorFour} from "../assets/color-E0A39A.svg";
import { ReactComponent as ShirtColorOne} from "../assets/color-88C10F.svg";
import { ReactComponent as ShirtColorTwo} from "../assets/color-B2C7C7.svg";
import { ReactComponent as ShirtColorThree} from "../assets/color-FF1414.svg";
import { ReactComponent as ShirtColorFour} from "../assets/color-striped.svg";


    const Form = () => {
        return (
        <form className="avatar-form" action='' method=''>
              <p>Lequel de ces deux avatars préférez-vous ?</p>
            <div className="gender">
                <label className="gender-label" for="man"><ManAvatar /></label>
                    <input type="radio" name="avatar" id="man" value="man" />
                <label className="gender-label" for="woman"><WomanAvatar /></label>
                    <input type="radio" name="avatar" id="woman" value="woman" />  
            </div>
            <div id="skin-border">
            <div className="skin">
                    <Skin />
                <label className="label-skin" for="skin-color1"><SkinColorOne /></label>
                    <input type="radio" name="skin-color" id="skin-color1" value="skin-color1" />
                <label className="label-skin" for="skin-color2"><SkinColorTwo /></label>
                    <input type="radio" name="skin-color" id="skin-color2" value="skin-color2" />
                <label className="label-skin" for="skin-color3"><SkinColorThree /></label>
                    <input type="radio" name="skin-color" id="skin-color3" value="skin-color3" />
                <label className="label-skin" for="skin-color4"><SkinColorFour /></label>
                    <input type="radio" name="skin-color" id="skin-color4" value="skin-color4" />  
            </div>
            </div>
            <div className="shirt">
                    <Shirt />
                <label for="shirt-color1"><ShirtColorOne /></label>
                    <input type="radio" id="shirt-color1" name="shirt-color" value="shirt-color1" />
                <label for="shirt-color2"><ShirtColorTwo /></label>
                    <input type="radio" id="shirt-color2" name="shirt-color" value="shirt-color2" />
                <label for="shirt-color3"><ShirtColorThree /></label>
                    <input type="radio" id="shirt-color3" name="shirt-color" value="shirt-color3" />
                <label for="shirt-color4"><ShirtColorFour /></label>
                    <input type="radio" id="shirt-color4" name="shirt-color" value="shirt-color4" /> 
            </div>
                <button type="submit" className="submit-form">VALIDER</button>
        </form>
    );
}

export default Form;