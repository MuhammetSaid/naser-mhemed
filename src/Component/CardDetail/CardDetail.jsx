import React from 'react'

export default function CardDetail(){
    const [content, setContent] = React.useState('')
    const [imageSrc, setImageSrc] = React.useState('')

    React.useEffect(() => {
        function updateFromHash(){
            const hash = window.location.hash || ''
            const query = hash.split('?')[1] || ''
            const params = new URLSearchParams(query)
            const raw = params.get('content') || ''
            const img = params.get('image') || ''
            try{
                setContent(decodeURIComponent(raw))
                setImageSrc(img ? decodeURIComponent(img) : '')
            } catch {
                setContent(raw)
                setImageSrc(img)
            }
        }
        updateFromHash()
        window.addEventListener('hashchange', updateFromHash)
        return () => window.removeEventListener('hashchange', updateFromHash)
    }, [])

    // share only the main page URL (no hash/content)
    const pageUrl = window.location.origin + window.location.pathname
    const encodedText = encodeURIComponent(content || '')
    const encodedUrl = encodeURIComponent(pageUrl)

    function openShare(url){
        window.open(url, '_blank')
    }

    return (
        <div style={{minHeight: '100vh', background: '#f3f4f6', padding: 24, display: 'flex', flexDirection: 'column'}}>
            <div style={{maxWidth: 1000, margin: '0 auto', flex: '1 0 auto'}}>
                <button onClick={() => { window.location.hash = '' }} style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#0b5',
                    fontSize: 16,
                    cursor: 'pointer',
                    marginBottom: 16,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                }}>⬅︎ الرجوع</button>

                <div style={{background: 'white', borderRadius: 10, boxShadow: '0 6px 18px rgba(0,0,0,0.08)', padding: 28}}>
                    {imageSrc ? (
                        <div style={{textAlign: 'center', marginBottom: 16}}>
                            <img src={imageSrc} alt="" style={{maxWidth: '100%', borderRadius: 8}} />
                        </div>
                    ) : null}
                    <div style={{color: '#333', lineHeight: 1.6, fontSize: 18, whiteSpace: 'pre-wrap', textAlign: 'left'}}>
                        {content || 'Seçili bir kart yok.'}
                    </div>

                    <div style={{marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap'}}>
                        <button onClick={() => openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`)} style={shareButtonStyle}>Facebook</button>
                        <button onClick={() => openShare(`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`)} style={shareButtonStyle}>WhatsApp</button>
                        <button onClick={() => openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`)} style={shareButtonStyle}>LinkedIn</button>
                        <button onClick={() => openShare(`sms:?&body=${encodedText}%20${encodedUrl}`)} style={shareButtonStyle}>SMS</button>
                    </div>
                </div>
            </div>

            <footer style={{background: '#002724', padding: '30px 0', marginTop: 24, flexShrink: 0}}>
                <div style={{maxWidth: "100%", margin: '0 auto', color: 'white', textAlign: 'center'}}>
                    <h3 style={{margin: 0, marginBottom: 12}}>أرحب بتواصلكم معي عبر البريد الإلكتروني </h3>
                    <p style={{margin: 0}}>naser.nahar.syria@gmail.com </p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Emblem_of_Syria_%282025%E2%80%93present%29.svg/1200px-Emblem_of_Syria_%282025%E2%80%93present%29.svg.png" alt="" style={{width: "100px", margin: "30px"}}/>

                    <h3 >ناصر المحيميد</h3>
                </div>
            </footer>
        </div>
    )
}

const shareButtonStyle = {
    background: '#0077b5',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: 6,
    cursor: 'pointer'
}
