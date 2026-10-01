"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const clients = ["MIDHAS CREATION","MONTA LUXEX","SAMBRIDHHI","ECOBORN","BE U SALON"];
const services = [
  { n:"01", title:"PERFORMANCE MARKETING", text:"Meta Ads, Google Ads, lead generation and retargeting built around the next measurable action." },
  { n:"02", title:"SOCIAL MEDIA", text:"Strategy, content, reels and community systems that give your brand a recognisable voice." },
  { n:"03", title:"CREATIVE PRODUCTION", text:"Photography, video, campaigns and brand content designed to stop the scroll and move the story forward." },
  { n:"04", title:"WEB & CONVERSION", text:"Websites, landing pages, conversion journeys and analytics that turn attention into action." },
];
const work = [
  { n:"01", title:"FUTURISTICNOIDA", tag:"Real Estate · Digital Experience", cls:"case-a" },
  { n:"02", title:"MIDHAS CREATION", tag:"Brand · Social · Content", cls:"case-b" },
  { n:"03", title:"ECoborn", tag:"Brand Growth · Creative", cls:"case-c" },
];
const testimonials = [
  { quote:"ClickRise brought strategy, creative and execution together instead of treating them as separate pieces.", name:"Nikki Kaur Makeovers", role:"Client" },
  { quote:"The work feels considered from the first idea to the final digital experience.", name:"R. Mehta", role:"Client" },
  { quote:"A practical creative partner — fast, collaborative and focused on getting the work out.", name:"A. Kapoor", role:"Client" },
];
const faqs = [
  ["What services does ClickRise provide?","Performance marketing, social media, creative production and web & conversion work — with strategy connecting the pieces."],
  ["Do you work with small businesses?","Yes. The engagement can be shaped around the stage, goals and available resources of the business."],
  ["Do you manage Meta and Google Ads?","Yes. Paid social and search can be part of a broader acquisition and lead-generation system."],
  ["Do you create content?","Yes. Creative production covers photography, video, campaign assets and ongoing social content."],
  ["How does your pricing work?","Pricing depends on scope, channels, deliverables and the level of ongoing support. Start a conversation and we can scope it properly."],
  ["Do you work outside Delhi NCR?","Yes. Delhi NCR is home base, while digital projects can be delivered remotely."],
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    gsap.fromTo(el,{y:55,opacity:0},{y:0,opacity:1,duration:.9,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 86%",once:true}});
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  },[]);
  return ref;
}

function Magnetic({children, className="", href="#"}:{children:React.ReactNode;className?:string;href?:string}) {
  const ref=useRef<HTMLAnchorElement>(null);
  return <a ref={ref} href={href} className={`magnetic ${className}`} onMouseMove={e=>{const r=ref.current?.getBoundingClientRect(); if(!r)return; gsap.to(ref.current,{x:(e.clientX-r.left-r.width/2)*.12,y:(e.clientY-r.top-r.height/2)*.12,duration:.25})}} onMouseLeave={()=>gsap.to(ref.current,{x:0,y:0,duration:.35,ease:"power3.out"})}>{children}</a>;
}

function Nav(){
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const f=()=>setScrolled(scrollY>40);addEventListener("scroll",f);f();return()=>removeEventListener("scroll",f)},[]);
  const links=[['Services','#services'],['Work','#work'],['About','#about'],['Contact','#contact']];
  return <header className={`nav ${scrolled?'nav-scrolled':''}`}><div className="nav-inner container"><a href="#top"><Image src="/clickrise-logo.png" alt="ClickRise Productions" width={210} height={74} priority /></a><nav>{links.map(([t,h])=><a key={t} href={h}>{t}</a>)}</nav><Magnetic href="#contact" className="nav-cta">START A PROJECT <b>↗</b></Magnetic><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Menu"><i/><i/></button></div>{open&&<div className="mobile-nav container">{links.map(([t,h])=><a key={t} href={h} onClick={()=>setOpen(false)}>{t}</a>)}</div>}</header>
}

function CustomCursor(){const ref=useRef<HTMLDivElement>(null);useEffect(()=>{const move=(e:MouseEvent)=>{if(!ref.current)return;gsap.to(ref.current,{x:e.clientX,y:e.clientY,duration:.16,ease:"power2.out"})};addEventListener('mousemove',move);return()=>removeEventListener('mousemove',move)},[]);return <div ref={ref} className="cursor"><span>↗</span></div>}
function Progress(){const ref=useRef<HTMLDivElement>(null);useEffect(()=>{const f=()=>{const h=document.documentElement.scrollHeight-innerHeight; if(ref.current)ref.current.style.transform=`scaleX(${h?scrollY/h:0})`};addEventListener('scroll',f);f();return()=>removeEventListener('scroll',f)},[]);return <div ref={ref} className="progress"/>}

function Hero(){const ref=useReveal();return <section className="hero" id="top"><div className="hero-grid"/><div className="hero-glow"/><div className="container hero-inner" ref={ref}><div className="hero-meta"><span>CLICKRISE PRODUCTIONS</span><span>DELHI NCR · INDIA</span></div><div className="hero-layout"><div><div className="kicker"><span className="dot"/> DIGITAL GROWTH PARTNER</div><h1>WE HELP<br/><em>BRANDS</em><br/>RISE.</h1></div><div className="hero-copy"><p>Digital marketing, social media, creative production & web experiences built for measurable growth.</p><div className="hero-actions"><Magnetic href="#contact" className="primary">START A PROJECT <b>↗</b></Magnetic><a href="#work" className="text-link">SEE OUR WORK ↓</a></div></div></div><div className="hero-bottom"><span>01 — 05</span><span>SCROLL TO EXPLORE ↓</span></div></div></section>}

function ClientMarquee(){return <section className="clients"><div className="marquee-label">TRUSTED BY BUSINESSES ACROSS DELHI NCR</div><div className="marquee"><div className="marquee-track">{[...clients,...clients].map((x,i)=><span key={i}>{x}<b>✦</b></span>)}</div></div></section>}

function About(){return <section className="section about" id="about"><div className="container"><div className="eyebrow">MORE THAN AN AGENCY</div><div className="about-grid"><h2>YOUR BRAND<br/><em>SHOULD MOVE.</em></h2><div><p className="lead">ClickRise brings strategy, creative and digital execution together under one roof.</p><p>We build the systems around a brand — from the first impression to the campaign, website, content and next conversion.</p><a className="line-link" href="#services">EXPLORE WHAT WE DO ↗</a></div></div></div></section>}

function Services(){return <section className="section services" id="services"><div className="container"><div className="services-top"><div><div className="eyebrow">WHAT WE ACTUALLY DO</div><h2>BUILD.<br/><em>GROW.</em><br/>REPEAT.</h2></div><p>Four capabilities. One connected growth system. Hover each service to reveal the thinking behind it.</p></div><div className="service-list">{services.map(s=><div className="service" key={s.n} onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--x',`${e.clientX-r.left}px`);e.currentTarget.style.setProperty('--y',`${e.clientY-r.top}px`)}}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.text}</p></div><i>↗</i><div className="service-light"/></div>)}</div></div></section>}

function CaseStudies(){const ref=useReveal();return <section className="section work" id="work"><div className="container" ref={ref}><div className="work-head"><div><div className="eyebrow">SELECTED WORK</div><h2>WORK THAT<br/><em>EARNS ATTENTION.</em></h2></div><p>Replace these visual treatments with approved project imagery as your case-study library grows.</p></div><div className="cases">{work.map(w=><article className={`case ${w.cls}`} key={w.n}><div className="case-shade"/><div className="case-top"><span>{w.n}</span><span>{w.tag}</span></div><div className="case-bottom"><div><small>{w.tag}</small><h3>{w.title}</h3></div><a href="#contact">VIEW CASE STUDY ↗</a></div></article>)}</div></div></section>}

function Results(){return <section className="section results"><div className="container"><div className="eyebrow">PROOF, NOT NOISE</div><div className="results-head"><h2>RESULTS<br/><em>THAT MATTER.</em></h2><p>We keep the proof section honest: replace these capability markers with verified ClickRise numbers as the data set grows.</p></div><div className="proof-grid">{[['01','STRATEGY','Clear objectives before channel activity.'],['02','CREATIVE','Content built to earn attention.'],['03','PERFORMANCE','Paid media connected to the journey.'],['04','OPTIMISATION','Measure, learn, improve and scale.']].map(x=><div key={x[0]}><b>{x[0]}</b><strong>{x[1]}</strong><p>{x[2]}</p></div>)}</div></div></section>}

function Funnel(){return <section className="section funnel"><div className="container"><div className="eyebrow">THE CLICKRISE GROWTH FUNNEL</div><div className="funnel-grid"><div><h2>TURN<br/><em>ATTENTION</em><br/>INTO ACTION.</h2><p>Social, content, ads and web work together instead of living in separate silos.</p></div><div className="funnel-visual">{['ATTENTION','INTEREST','LEAD','CONVERSION','GROWTH'].map((x,i)=><div className="funnel-node" style={{'--i':i} as CSSProperties} key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong><i>↓</i></div>)}</div></div></div></section>}

function Process(){return <section className="section process" id="process"><div className="container process-grid"><div className="process-sticky"><div className="eyebrow">HOW WE WORK</div><h2>DISCOVER.<br/>STRATEGY.<br/><em>EXECUTE.</em><br/>OPTIMISE.</h2><p>One loop. Four stages. No mystery.</p></div><div>{[['01','DISCOVER','Understand your business, audience and objectives.'],['02','STRATEGY','Build the growth plan, channels and creative direction.'],['03','EXECUTE','Campaigns. Content. Web. Creative.'],['04','OPTIMISE','Measure. Learn. Improve. Scale.']].map(x=><article className="step" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p><i>↗</i></article>)}</div></div></section>}

function GrowthLoop(){return <section className="section loop"><div className="container"><div className="eyebrow">THE GROWTH LOOP</div><div className="loop-wrap"><div><h2>CLICK <em>→</em><br/>RISE.</h2><p>Create → Distribute → Measure → Optimise → Scale.</p></div><div className="loop-ring"><div>CREATE</div><div>DISTRIBUTE</div><div>MEASURE</div><div>OPTIMISE</div><div>SCALE</div><span>↻</span></div></div></div></section>}

function Testimonials(){return <section className="section testimonials"><div className="container"><div className="eyebrow">WHAT CLIENTS SAY</div><h2>GOOD WORK<br/><em>TRAVELS.</em></h2><div className="quotes">{testimonials.map(t=><article key={t.name}><span>“</span><p>{t.quote}</p><div><strong>{t.name}</strong><small>{t.role}</small></div></article>)}</div></div></section>}

function FAQ(){const [open,setOpen]=useState<number|null>(null);return <section className="section faq"><div className="container faq-grid"><div><div className="eyebrow">FAQ</div><h2>QUESTIONS<br/><em>ANSWERED.</em></h2></div><div className="faq-list">{faqs.map(([q,a],i)=><button key={q} onClick={()=>setOpen(open===i?null:i)} className={open===i?'open':''}><span>{q}</span><b>{open===i?'−':'+'}</b>{open===i&&<p>{a}</p>}</button>)}</div></div></section>}

function Contact(){const [sent,setSent]=useState(false);return <section className="contact" id="contact"><div className="container"><div className="eyebrow">START A CONVERSATION</div><div className="contact-head"><h2>HAVE A PROJECT<br/>IN MIND?<br/><em>LET'S MAKE IT RISE.</em></h2><p>Tell us what you are building, where you are stuck, or where you want to go next.</p></div><div className="contact-grid"><div className="contact-info"><span>DIRECT</span><a href="mailto:hello@clickrise.in">hello@clickrise.in</a><a href="https://wa.me/919999999999" target="_blank">WhatsApp ↗</a><p>Delhi NCR · India</p><small>MON — FRI<br/>10:00 — 18:00</small></div><form onSubmit={e=>{e.preventDefault();setSent(true)}}><label>YOUR NAME<input required name="name" placeholder="Your name"/></label><label>EMAIL<input required type="email" name="email" placeholder="you@company.com"/></label><label>PHONE<input name="phone" placeholder="+91"/></label><label>WHAT DO YOU NEED?<select name="need" defaultValue=""><option value="" disabled>Select one</option><option>Performance Marketing</option><option>Social Media</option><option>Creative Production</option><option>Web & Conversion</option><option>Something else</option></select></label><label>TELL US ABOUT IT<textarea name="message" placeholder="A little context goes a long way..." rows={4}/></label><button type="submit">{sent?'✓ MESSAGE SENT':'SEND ENQUIRY'} <b>↗</b></button>{sent&&<p className="sent">Thanks — we&apos;ll get back to you shortly.</p>}</form></div></div></section>}

function Footer(){return <footer className="footer"><div className="container"><div className="footer-main"><div><Image src="/clickrise-logo.png" alt="ClickRise" width={210} height={74}/><p>We help brands rise through strategy, creative and digital growth.</p></div><div><span>EXPLORE</span><a href="#services">Services</a><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div><div><span>SOCIAL</span><a href="#">Instagram ↗</a><a href="#">LinkedIn ↗</a><a href="https://wa.me/919999999999">WhatsApp ↗</a></div><div><span>LOCATION</span><p>Delhi NCR · India</p><p>© 2026 ClickRise Productions</p></div></div><div className="footer-bottom"><span>CLICKRISE / WE HELP BRANDS RISE.</span><a href="#top">BACK TO TOP ↑</a></div></div></footer>}

export default function Home(){return <><Progress/><CustomCursor/><Nav/><main><Hero/><ClientMarquee/><About/><Services/><CaseStudies/><Results/><Funnel/><Process/><GrowthLoop/><Testimonials/><FAQ/><Contact/></main><Footer/></>}
