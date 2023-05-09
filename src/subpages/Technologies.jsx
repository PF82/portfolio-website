import React from 'react'
import '../sass/technologies.scss'

import html from "../images/services/technologies/html.png"
import css from "../images/services/technologies/css.png"
import bootstrap from "../images/services/technologies/bootstrap.png"
import jquery from "../images/services/technologies/jquery.png"
import js from "../images/services/technologies/js.png"
import react from "../images/services/technologies/react.png"
import node from "../images/services/technologies/node.png"

import netlify from "../images/services/technologies/netlify.png"
import vsc from "../images/services/technologies/visual-studio-code.png"
import mvsls from "../images/services/technologies/microsoft-visual-studio-live-share.png"
import chatgpt from "../images/services/technologies/chat-gpt.png"
import github from "../images/services/technologies/github.png"

import { HtmlS, CssS, BootstrapS, JQueryS, JsS, ReactJsS, NodejsS, NetlifyS, ChatgptS, VscS, GithubS, VslsS } from '../components/ProgressBars.jsx'

const Technologies = () => {
  return (
    <section className='sectionTec'>
      <div className='divTec'>
        <h3>TECHNOLOGIES AND TOOLS</h3>

        <div className='containerTec'>
          <div className='title_logoTec'>
            <p className='pTec'>HTML</p>
            <img src={html} alt="HTML Logo" />
            <div className='htmlTec-1'>
              <div className='htmlTec-2'><HtmlS /></div>
            </div>
          </div>
          <div className='title_logoTec'>
            <p className='pTec'>CSS</p>
            <img src={css} alt="CSS Logo" />
            <div className='cssTec-1'>
              <div className='cssTec-2'><CssS /></div>
            </div>
          </div>
          <div className='title_logoTec'>
            <p className='pTec'>Bootstrap</p>
            <img src={bootstrap} alt="Bootstrap Logo" />
            <div className='bootstrapTec-1'>
              <div className='bootstrapTec-2'><BootstrapS /></div>
            </div>
          </div>
          <div className='title_logoTec'>
            <p className='pTec'>jQuery</p>
            <img src={jquery} alt="jQuery Logo" />
            <div className='jqueryTec-1'>
              <div className='jqueryTec-2'><JQueryS /></div>
            </div>
          </div>
          <div className='title_logoTec'>
            <p className='pTec'>JavaScript</p>
            <img src={js} alt="JavaScript Logo" />
            <div className='jsTec-1'>
              <div className='jsTec-2'><JsS /></div>
            </div>
          </div>
          <div className='title_logoTec'>
            <p className='pTec'>React.js</p>
            <img src={react} alt="React JS Logo" style={{ width: '130px', height: '130px' }} />
            <div className='reactjsTec-1'>
              <div className='reactjsTec-2'><ReactJsS /></div>
            </div>
          </div>
          <div className='title_logoTec'>
            <p className='pTec'>Node.js</p>
            <img src={node} alt="Node JS Logo" />
            <div className='nodejsTec-1'>
              <div className='nodejsTec-2'><NodejsS /></div>
            </div>
          </div>
          <div className='title_logoTec'>
            <p className='pTec'>Netlify</p>
            <img src={netlify} alt="Netlify Logo" />
            <div className='netlifyTec-1'>
              <div className='netlifyTec-2'><NetlifyS /></div>
            </div>
          </div>
          <div className='title_logoTec'>
            <p className='pTec'>AI ChatGPT</p>
            <img src={chatgpt} alt="ChatGPT Logo" />
            <div className='chatgptTec-1'>
              <div className='chatgptTec-2'><ChatgptS /></div>
            </div>
          </div>
          <div className='title_logoTec'>
            <p className='pTec'>Visual Studio Code</p>
            <img src={vsc} alt="Visual Studio Code Logo" />
            <div className='vscTec-1'>
              <div className='vscTec-2'><VscS /></div>
            </div>
          </div>
          <div className='title_logoTec'>
            <p className='pTec'>GitHub</p>
            <img src={github} alt="GitHub Logo" />
            <div className='githubTec-1'>
              <div className='githubTec-2'><GithubS /></div>
            </div>
          </div>
          <div className='title_logoTec'>
            <p className='pTec'>Visual Studio Live Share</p>
            <img src={mvsls} alt="Microsoft Visual Studio Live Share Logo" />
            <div className='vslsTec-1'>
              <div className='vslsTec-2'><VslsS /></div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Technologies