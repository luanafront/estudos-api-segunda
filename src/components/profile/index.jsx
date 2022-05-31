import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from '@mui/material/';
import ReactLoading from 'react-loading';
import "./index.css"
import githubLogo from "./github.png"


const Profile = () => {
    const [profileData, setProfileData] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem("token")
        if(token === null){
            navigate("/")
        } else {
            axios.get("https://62913677665ea71fe142a512.mockapi.io/api/v1/profile/1/")
            .then((res) => {
                let data = res.data
                console.log(data)
                setTimeout(() => {
                    setProfileData(data)
                }, 1000)
            })
        }
    }, [])

    const deleteToken = () => {
        localStorage.clear()
        navigate("/")
    }
    return (
            profileData === null ? 
            <div className="loading">
                <ReactLoading 
                    type="spokes"
                    color="#f00"
                    height={100} 
                    width={50}
                />
            </div> : 
            <div className="data">
                <header className="cabecalho">
                    <h1 className="titulo">Meu Perfil</h1>
                </header>
                <main className="principal">
                    <p>{profileData.email}</p>
                    <p>{profileData.first_name}</p>
                    <p>{profileData.last_name}</p>
                    <div className="div_imagem">
                        <img className="imagem_perfil" alt="imagem" src={profileData.image_profile}/>
                    </div>
                    <div className="botao">
                        <Button 
                            variant="contained"
                            onClick={deleteToken}
                        > 
                            logout
                        </Button>
                    </div>
                </main>
                <footer className="rodape">
                    {/* <a href="https://github.com/luanafront/estudos-api-domingo">
                         <img alt="github" className='imagem__github' src={githubLogo}/> 
                    </a> */}
                </footer>
               
            </div>
          
       
    )
}

export default Profile