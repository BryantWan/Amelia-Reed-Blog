import AmeliaReed from '../images/Amelia.png'



export default function Profile() {
    return (
        <>
            <section id="profile">
                <img src={AmeliaReed} id="portrait" alt="AmeliaReed" width="150px"/>
                <p>Name: Amelia Reed</p>
                <p>Birthday: December 30th, 2003</p>
                <p>Zodiac sign: Capicorn</p>
                <p>About me: <br/> Engineering student at the University of Viwood.</p>
            </section>
        </>
    )
}