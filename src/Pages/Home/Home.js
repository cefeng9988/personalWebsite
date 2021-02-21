import React from 'react';
import './Home.css';

const Home = () => {
    return(
        <>
            <div id={'profileBio'}>
                <img src="/profilePic.jpeg" alt="image" className={"homePic"}/>
                <div id={'homeBio'}>
                    <div className={'homeHeaders'}> Bio </div>
                    <div className={'homeBioBody'}> Chen Eric Feng is a senior at Boston University majoring in Computer
                        Science with a minor in Economics. Eric will be an incoming Software Engineer
                        Intern at Liberty Mutual this summer. He grew up in Temecula, California and is now residing in Boston,
                        Massachusetts. Over his college career, Eric has taken on numerous technical and non-technical opportunities.
                        These include: working in alumni outreach, clinical trial research, website design and Software Engineering. </div>
                    <div className={'homeInterestsHeader'}> Interests </div>
                    <div className={'homeBioBody'}> • Eric is  a plant enthusiast. Over the course of quarentine, Eric has collected
                         numerous species of fauna (Monstera Deliciosas, Pothos, Ivy). </div>
                    <div className={'homeBioBody'}> • Eric loves to cook and develop new recipes. He has mastered the pan-flip and experimented with
                         Chinese, Indian and French cuisine. </div>
                    <div className={'homeBioBody'}> • Eric is a self-acclaimed artist. He has been painting and sketching since he was
                         a little boy and continues to do so in his free time. Eric is currently interested in abstract mid-century
                         modern acrylics and watercolor.</div>
                </div>
            </div>

            <div id={'gitContent'}>
                <div id={'gitLink'}>
                    <div className={'homeHeaders'}> Checkout my projects on GitHub-- </div>
                    <tr>
                        <td className={'gitLinkPadding'}><a style={{display: "table-cell", color: "#1520A6"}} href={"https://github.com/cefeng9988"} target="_blank">Click Here</a></td>
                    </tr>
                </div>
                <div id={"gitImagesStyle"}>
                    <img src={"/calculator1.jpg"} alt={"image"} className={"gitImages"}/>
                    <img src={"/calculator2.jpg"} alt={"image"} className={"gitImages"}/>
                    <img src={"/passwordCheck.jpg"} alt={"image"} className={"gitImages"}/>
                </div>
                <div id={"gitImagesStyle"}>
                    <div>Advanced Calculator</div>
                    <div>Simple Calculator</div>
                    <div>Password Checker</div>
                </div>
            </div>
        </>
    )
}

export default Home;