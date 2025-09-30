import React from 'react'
import "./MainPage.css"
import ReactCardSlider from '../Slider/ReactCardSlider'
import Slider2 from '../Slider2/Slider2'

export default function MainPage() {
    
// a slide object contains the image link, title and function/click event for when a user clicks on a card
    

    return (
        <>
            <div className="main-dev">
                <div className="left-section">
                    <div className="left-content">
                        <div className="profile-image">
                            <img src="https://i.imgur.com/hwxqWcP.jpeg" alt="" style={{width: "160px"}}/>
                        </div>
                        <h1 className="left-title" style={{color: "white", marginTop:"23px"}}>الرؤية الانتخابية للسيد ناصر المحيميد</h1>
                        <p className="left-desc" style={{color: "white", marginTop:"16px"}}>بعد ثورة عظيمة وتضحيات جليلة، نؤمن أن الشرعية الحقيقية تنبع من دماء الشهداء وثبات الثوار.
ننطلق من الثورة السورية المباركة كمنارة لمسارنا، لنرسخ نظاماً عادلاً يقوم على التوازن بين السلطات، ويمنح الثوار دوراً محورياً في صنع القرار وبناء مؤسسات الدولة القادمة.
وكانت المرأة السورية شريكة في هذه التضحيات، صابرةً ومناضلة، لتبقى ركناً أصيلاً في مسيرة الحرية وبناء الوطن.
ومن الداخل السوري ارتسمت معالم الحرية، وصاغ صموده صفحات التحرير، فيما كان أبناء المهجر عوناً وسنداً يكملون المسيرة.
إن رعاية أسر الشهداء والمصابين واجب وطني، وحفظ ذاكرة الثورة عهد لا يسقط، لتبقى حاضرة في وجدان الأجيال.
نطمح إلى وطنٍ حرّ كريم، يستعيد مكانته بين الأمم بإرادة شعبه ورؤية ثورته.</p>
                    </div>
                </div>

                <div className="right-section1">
                    <div className="right-section">
                        <div className="right-content" style={{padding: "80px", direction: "rtl"}}>
                            <div className="image-dev">
                                <img src="https://i.imgur.com/R25HfMq.png" alt="" />
                            </div>

                            <h1 className='h1-hero' style={{marginTop: "10px", textAlign: "center"}}>نحن نؤمن بوطن يجمع أبنائه على قلب واحد، حيث العدالة الاجتماعية قاعدة لكل عمل، ورؤية جامعة تقود نهضة اقتصادية حقيقية، ليكون وطننا حراً كريماً، صاعداً نحو المستقبل، ومزدهراً بثمار جهود كل أبنائه.
                            </h1>
                            <h1 className='h1-sub' style={{marginTop: "32px", textAlign: "center"}}>إرادة شعب… ورؤية وطن</h1>
                        </div>
                    </div>

                    <div className="section2">
                        
                        <div className="section2-content">
                            <div className="logo-abs" style={{position: "absolute", width: "60%"}}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Emblem_of_Syria_%282025%E2%80%93present%29.svg/1200px-Emblem_of_Syria_%282025%E2%80%93present%29.svg.png" alt="" style={{width: "100%", opacity: "0.3"}} />
                            </div>
                            <div className="image2 image-container" style={{zIndex: "10"}} >
                                <img src="https://i.imgur.com/zIhCPxE.jpeg" alt="" />
                            </div>
                            <div className="text2" style={{zIndex: "10"}}>
                                <h2 className="section2-title" style={{direction: "rtl", textAlign: "center"}}>رؤيتي لسوريا الحاضر والمستقبل

سوريا التي نحلم بها هي وطن جامع لكل أبنائه، لا مكان فيه للتهميش أو الإقصاء، يقوم على العدالة الاجتماعية وتكافؤ الفرص، حيث تكون مؤسسات الدولة في خدمة الشعب لا العكس.

                                </h2>
                                <p className="section2-p" style={{direction: "rtl", marginTop:"20px", textAlign: "center"}}>نسعى إلى بناء نظام صحي وتعليمي متطور، وتنمية اقتصادية شاملة توفر فرص العمل وتدعم الإنتاج المحلي، إلى جانب بنية تحتية وخدمات حديثة تليق بكرامة المواطن.
                                </p>
                                <p className="section2-p" style={{direction: "rtl", marginTop:"16px", textAlign: "center"}}>ونضع في مقدمة أولوياتنا الدعم الاجتماعي لمصابي الحرب الأكثر حاجة، ولأسر الشهداء المحتاجة، باعتبار ذلك واجبًا وطنيًا وأخلاقيًا لا يسقط بالتقادم.</p>
                                <p className="section2-p" style={{direction: "rtl", marginTop:"16px", textAlign: "center"}}>كما نؤمن أن تمكين المجتمع، وخاصة الشباب والنساء، هو الضامن لاستمرار النهضة وصيانة مكتسبات الثورة.
                                </p>
                                <p className="section2-p" style={{direction: "rtl", marginTop:"16px", textAlign: "center"}}>بهذا، نصون حاضر سوريا بقوة مؤسساتها، ونفتح آفاق المستقبل لتكون وطناً حراً كريماً، شامخاً بين الأمم.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="section3">
                        <div className="section3-content">
                            <h1 className="section-title" style={{margin: "48px", color: "white"}}>الأولويات الوطنية</h1>
                            <div className="slider-div"style={{width: "80%"}}> 
                                <ReactCardSlider />
                            </div>
                        </div>
                    </div>
                    

                    <div className="section4">
                        
                        <div className="section4-content">
                            
                            <h1 className="section4-heading" style={{marginTop: "50px", textAlign: "center", width: "80%", color:"#c89a2e", fontWeight: "750", fontFamily: "cairo"}}>لقد طوينا صفحة الحرب في ميادين التحرير، واليوم تبدأ ملحمة البناء
                            </h1>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Emblem_of_Syria_%282025%E2%80%93present%29.svg/1200px-Emblem_of_Syria_%282025%E2%80%93present%29.svg.png" alt="" style={{marginTop: "1px", width: "12%", marginBottom: "20px"}}/>
                        </div>
                    </div>

                    <div className="section5">
                        <div className="section5-content">
                            <div className="logo-image">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Emblem_of_Syria_%282025%E2%80%93present%29.svg/1200px-Emblem_of_Syria_%282025%E2%80%93present%29.svg.png" alt="" style={{opacity: "0.25"}}/>
                            </div>
                            <p style={{fontFamily: "cairo", direction: "rtl"}} className='h1-sec5-main'>البرنامج ـ المحاور الأساسية:</p>
                            <div className="section5-text" style={{direction: "rtl", marginRight: "40px ", paddingBottom: "0", zIndex: "100", position: "relative", display: "flex"}}>
                                <div className="left-sction5">
                                    <p style={{fontFamily: "cairo", fontWeight: "700", color: "rgb(145, 0, 0)", fontSize: "22px", marginTop: "10px"}}> 1. رعاية المصابين والجرحى
                                    </p>
                                    <ul>
                                        <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('توفير الدعم الصحي والمعنوي والمادي للمصابين الأكثر حاجة.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                            توفير الدعم الصحي والمعنوي والمادي للمصابين الأكثر حاجة.
                                        </li>
                                        <li  style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                            <p onClick={() => { window.location.hash = `?content=${encodeURIComponent('تحسين خدمات إعادة التأهيل والرعاية المستمرة لهم.')}` }}>تحسين خدمات إعادة التأهيل والرعاية المستمرة لهم.</p>
                                        </li>
                                        
                                    </ul>
                                    <p style={{fontFamily: "cairo", fontWeight: "700", color: "rgb(145, 0, 0)", fontSize: "22px", marginTop: "20px"}}>3. إعادة إعمار الأحياء والمنازل
                                    </p>
                                    <ul>
                                        <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('ترميم المنازل المتضررة وجعلها صالحة للسكن.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                            ترميم المنازل المتضررة وجعلها صالحة للسكن.
                                        </li>
                                        <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('إطلاق مشاريع إعادة تأهيل الأحياء المنكوبة بما يحفظ كرامة السكان.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                            إطلاق مشاريع إعادة تأهيل الأحياء المنكوبة بما يحفظ كرامة السكان.
                                        </li>
                                    </ul>

                                    

                                    {/* ============================================ */}

                                    <p style={{fontFamily: "cairo", fontWeight: "700", color: "rgb(145, 0, 0)", fontSize: "22px", marginTop: "20px"}}>5. البنية التحتية
                                    </p>
                                    <ul>
                                        <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('تطوير شبكات المياه والطرق.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                            تطوير شبكات المياه والطرق.
                                        </li>
                                        <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('إنشاء طرق جديدة واسعة تسهّل الحركة وتنعش الاقتصاد.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                            إنشاء طرق جديدة واسعة تسهّل الحركة وتنعش الاقتصاد.
                                        </li>
                                    </ul>
                                    <p style={{fontFamily: "cairo", fontWeight: "700", color: "rgb(145, 0, 0)", fontSize: "22px", marginTop: "20px"}}>7. الزراعة والمزارعون
                                </p>
                                <ul>
                                    <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('دعم المزارعين لمواجهة تحديات الجفاف وقلة الأمطار.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                        دعم المزارعين لمواجهة تحديات الجفاف وقلة الأمطار.
                                    </li>
                                    <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('توفير حلول بديلة للري وتحفيز الإنتاج الزراعي.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                        توفير حلول بديلة للري وتحفيز الإنتاج الزراعي.
                                    </li>
                                </ul>

                                <p style={{fontFamily: "cairo", fontWeight: "700", color: "rgb(145, 0, 0)", fontSize: "22px", marginTop: "20px"}}>9. الهوية الوطنية
                                </p>
                                <ul>
                                    <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('جعل حمص عنوانًا للبناء بعد التحرير.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                        جعل حمص عنوانًا للبناء بعد التحرير.
                                    </li>
                                    <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('إبراز مكانتها كعاصمة الثورة السورية ورمز للتجديد.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                        إبراز مكانتها كعاصمة الثورة السورية ورمز للتجديد.
                                    </li>
                                </ul>
                                    </div>

                                <div className="right-sction5" style={{marginRight: "70px"}}>

                                    <p style={{fontFamily: "cairo", fontWeight: "700", color: "rgb(145, 0, 0)", fontSize: "22px", marginTop: "20px"}}> 2. أسر الشهداء والمحتاجين
                                    </p>
                                    <ul>
                                        <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('ضمان حياة كريمة لأسر الشهداء عبر الدعم المادي والاجتماعي.')}`  }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                            ضمان حياة كريمة لأسر الشهداء عبر الدعم المادي والاجتماعي.
                                        </li>
                                        <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('إنشاء برامج خاصة لتأمين فرص التعليم والعمل لأبنائهم.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                            إنشاء برامج خاصة لتأمين فرص التعليم والعمل لأبنائهم.
                                        </li>
                                    </ul>

                                    <p style={{fontFamily: "cairo", fontWeight: "700", color: "rgb(145, 0, 0)", fontSize: "22px", marginTop: "20px"}}>4. التعليم والمدارس
                                    </p>
                                    <ul>
                                        <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('توسيع المدارس القائمة وبناء مدارس جديدة.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                            توسيع المدارس القائمة وبناء مدارس جديدة.
                                        </li>
                                        <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('دعم المعلمين بالموارد والتأهيل المستمر لضمان جودة التعليم.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                            دعم المعلمين بالموارد والتأهيل المستمر لضمان جودة التعليم.
                                        </li>
                                    </ul>
                                <p style={{fontFamily: "cairo", fontWeight: "700", color: "rgb(145, 0, 0)", fontSize: "22px", marginTop: "20px"}}>6. القطاع الصحي
                                </p>
                                <ul>
                                    <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('تحديث وتطوير المشافي القائمة.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                        تحديث وتطوير المشافي القائمة.
                                    </li>
                                    <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('تعزيز الخدمات الطبية لتلبية حاجات الناس.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                        تعزيز الخدمات الطبية لتلبية حاجات الناس.
                                    </li>
                                </ul>

                                

                                <p style={{fontFamily: "cairo", fontWeight: "700", color: "rgb(145, 0, 0)", fontSize: "22px", marginTop: "20px"}}>8. الحوكمة والالتزام بالقانون
                                </p>
                                <ul>
                                    <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('جعل القانون المرجعية العليا لكل القرارات.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                        جعل القانون المرجعية العليا لكل القرارات.
                                    </li>
                                    <li onClick={() => { window.location.hash = `?content=${encodeURIComponent('العمل ببرنامج زمني محدد وشفاف يمكن للناس متابعته ومحاسبته.')}` }} style={{marginRight: "30px", fontSize: "21px", marginTop:"10px", cursor: 'pointer'}}>
                                        العمل ببرنامج زمني محدد وشفاف يمكن للناس متابعته ومحاسبته.
                                    </li>
                                </ul>

                                
                                </div>

                                

                                

                                
                            </div>
                            <div className="endline">
                                    <div className="line"></div>

                                    <div className="image-logo-small">
                                        <img src="https://i.imgur.com/rWbU7hx.png" alt="" />
                                    </div>

                                    <div className="line"></div> 
                                </div>
                        </div>
                    </div>

                    <div className="section8">
                        <div className="section8-content" style={{}}> 
                            <div className="section8-con" style={{margin: "0", padding: "0",display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                            <h1 style={{margin: "10px", fontFamily: "cairo", direction: "rtl", textAlign: "center"}}>سيرة مختصرة ورؤية لإعادة إعمار حمص</h1>
                                
                                <div className="section8-con-right" style={{direction: "rtl"}}>
                                <div className="section8-con-left">
                                    <div className="image8">
                                        <img src="https://i.imgur.com/hwxqWcP.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="line8" style={{width: "30%", height: "4px", background: "#002724", margin: "20px"}}></div>
                                    <p>أنا ناصر محمد عيد المحيميد، الذي عرفه الناس باسم ناصر النهار في ساحات القتال، ابن حمص، وإبن حيّها الصامد بابا عمرو.</p>
                                    <br />
                                    <p>كان سلاحي يومها البارود، حتى كتبنا بالدم صفحة الحرية، أمّا اليوم فسلاحي هو القلم والبناء، لأكتب بالعمل لا بالكلمات وحدها.</p>
                                    <br />
                                    <p>مرجعيتي هي القانون الذي ناضلنا من أجله أربعة عشر عامًا، فصار بوصلةً ترشد خطاي، لا ميل فيها ولا انحراف.</p>
                                    <br />
                                    <p>أولوياتي لا تحتمل اللبس: أن نرعى الجرحى الأكثر حاجة، وأن نكون سندًا لأسر الشهداء المحتاجين، وأن نعيد للمنازل دفء الحياة بترميمها، وأن نفتح للطلاب أبواب مدارس أوسع وأجمل، ونمنح معلميهم الدعم ليستمروا في رسالتهم. أن نطوّر البنية التحتية للمياه والطرق، ونشق طرقًا جديدة رحبة تليق بمدينة الحرية، وأن نرفع من شأن المشافي، وأن نقف إلى جانب المزارعين في مواجهة قلة المطر.</p>
                                    <br />
                                    <p>لست في مجلس الشعب لأبيع الناس أحلاما معلّقة، بل لأحوّلها إلى واقع ببرنامج زمني واضح ودقيق.</p>
                                    <br />
                                    <p>لقد طوينا صفحة الحرب في ميادين التحرير، واليوم تبدأ ملحمة البناء؛ معركتنا أن نعيد لحمص وجهها المشرق، وأن نصوغها كما تستحق أن تكون: عاصمة الثورة السورية.</p>
                                    <br />
                                    <h3 className='abs-star1'>★</h3>
                                    <h3 className='abs-star2'>★</h3>
                                    <h3 className='abs-star3'>★</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="footer-content">
                            <h1 style={{textAlign: "center", color: "white", marginTop: "40px"}}>أرحب بتواصلكم معي عبر البريد الإلكتروني 
                            </h1>
                            <h4 style={{textAlign: "center", color: "white", marginTop: "20px"}}>naser.nahar.syria@gmail.com</h4>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Emblem_of_Syria_%282025%E2%80%93present%29.svg/1200px-Emblem_of_Syria_%282025%E2%80%93present%29.svg.png" alt="" style={{width: "100px", margin: "30px"}}/>
                            <h1 style={{textAlign: "center", color: "white", marginBottom: "20px"}}>ناصر المحيميد
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
