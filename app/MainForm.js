"use client"
import Modal from 'react-bootstrap/Modal';
// import Video from 'next-video';
import Image from 'next/image'
import dhoni from "../videos/dhoni.gif"
import dhoni2 from "../videos/dhoniwtr.gif"
import dekh from "../videos/dekh.mp4"
import serious from "../videos/Userious.mp4"
import d1 from "../videos/d1.mp4"
import d2 from "../videos/d2.mp4"

import { useState } from "react"

const MainForm = () => {

    const [text, setText] = useState("")
    const [modalShow, setModalShow] = useState(true);
    const [showMod, setshowMod] = useState(false)
    const [Thala, setThala] = useState(false)

    let style = {
        backgroundImage: `url('https://c.tenor.com/DIrUjkTnopsAAAAd/tenor.gif')`,
        backgroundRepeat  : 'round',
    }


    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalShow(true)
        try {
            if (text.length == 7) {
                setshowMod(true)
                setThala(true)
            } else {
                setshowMod(true)
                setThala(false)
            }
            try {
                const cpyText = text;
                let num = parseInt(cpyText);
                console.log(num + 3);
                let sum = 0;
                while (num > 0) {
                    sum = sum + num % 10
                    num = parseInt(num / 10)
                }
                if (sum == 7) {
                    setshowMod(true)
                    setThala(true)
                }
            } catch (error) {
                console.log(error)
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen" {...Thala ? style = { style } : ""}>
                <h1 className="text-5xl text-center p-2">Thala for a Reason</h1>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                    <div>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={text}
                            onChange={handleText}
                            autoComplete="username"
                            className="p-3 rounded-md"
                            placeholder="REACTJS = 7"
                        />
                        <button
                            type="submit"
                            className="flex w-full my-3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
                        >
                            Check
                        </button>
                    </div>
                </form>
                {showMod && <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => {
                        setModalShow(false)
                        setshowMod(false)
                        setThala(false)
                        setText("")
                    }}
                    Mtext={text}
                    thala={Thala}
                />}
            </div>
        </>
    )
}

function MyVerticallyCenteredModal(props) {

    const d = [d1, d2];
    const v = [dekh, serious];
    const newRandomNumber = Math.floor(Math.random() * 2);
    const thala = props.thala;


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                {thala ? <video height={"100%"} width={"100%"} controls autoPlay src={d[newRandomNumber]} /> : <video height={"100%"} width={"100%"} controls autoPlay src={v[newRandomNumber]} />}
            </Modal.Body>
        </Modal>
    );
}

export default MainForm
