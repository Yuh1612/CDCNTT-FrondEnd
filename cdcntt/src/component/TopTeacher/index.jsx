import {AiFillStar } from "react-icons/ai";
import './index.css'
export default function TopTeacher() {
    return (
        <>
            <div className="TopTeacher">
                <img src="https://avatars.preply.com/i/logos/i/logos/avatar_jfuhkgwf9ho.jpg?d=160x160&f=webp" alt="TopTeacherImg" className="TopTeacherImg" />
                <h6>Sarah M</h6>
                <div className="Introduction">
                    <AiFillStar className='Star' />
                    <p>5</p>
                </div>
                <p>Speak: English(native)</p>
                <span class="styles_link__qR927">View full profile</span>
            </div>
            
            <div className="TopTeacher">
                <img src="https://avatars.preply.com/i/logos/i/logos/avatar_6eqrpib4gdu.jpg?d=160x160&f=webp" alt="TopTeacherImg" className="TopTeacherImg" />
                <h6>Kinneret E</h6>
                <div className="Introduction">
                    <AiFillStar className='Star' />
                    <p>5</p>
                </div>
                <p>Speak: English(native)</p>
                <span class="styles_link__qR927">View full profile</span>
            </div>

            <div className="TopTeacher">
                <img src="https://static2.yan.vn/YanNews/2167221/202202/1-f4ae874f-c1f8bfb8.png" alt="TopTeacherImg" className="TopTeacherImg" />
                <h6>Dang Tran Tung</h6>
                <div className="Introduction">
                    <AiFillStar className='Star' />
                    <p>5</p>
                </div>
                <p>Speak: Vietnamese, English</p>
                <span class="styles_link__qR927">View full profile</span>
            </div>
        </>

    )
}