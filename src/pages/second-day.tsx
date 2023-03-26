
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Second.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Second() {

    let canvas: any, width: any, height: any, ctx:any;
    let fireworks: any = [];
    let particles: any = [];

    function setup() {
        canvas = document.getElementById("canvas");
        setSize(canvas);
        ctx = canvas.getContext("2d");
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);
        fireworks.push(new Firework(Math.random() * (width - 200) + 100));
        window.addEventListener("resize", windowResized);
        document.addEventListener("click", onClick);
    }

    setTimeout(setup, 1);

    function loop() {
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);
        ctx.globalAlpha = 1;

        for (let i = 0; i < fireworks.length; i++) {
            let done = fireworks[i].update();
            fireworks[i].draw();
            if (done) fireworks.splice(i, 1);
        }

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].lifetime > 80) particles.splice(i, 1);
        }

        if (Math.random() < 1 / 60) fireworks.push(new Firework(Math.random() * (width - 200) + 100));
    }
    setInterval(loop, 1 / 60);
    //setInterval(loop, 100/60);
    class Particle {

        private x: any;
        private y: any;
        private col: any;
        private vel: any;
        private lifetime: any;


        constructor(x: any, y: any, col: any) {
            this.x = x;
            this.y = y;
            this.col = col;
            this.vel = randomVec(2);
            this.lifetime = 0;
        }

        update() {
            this.x += this.vel.x;
            this.y += this.vel.y;
            this.vel.y += 0.02;
            this.vel.x *= 0.99;
            this.vel.y *= 0.99;
            this.lifetime++;
        }

        draw() {
            ctx.globalAlpha = Math.max(1 - this.lifetime / 80, 0);
            ctx.fillStyle = this.col;
            ctx.fillRect(this.x, this.y, 2, 2);
        }
    }

    class Firework {

        private x: any;
        private y: any;
        private col: any;
        private vel: any;
        private isBlown: any;

        constructor(x: any) {
            this.x = x;
            this.y = height;
            this.isBlown = false;
            this.col = randomCol();
        }

        update() {
            this.y -= 3;
            if (this.y < 350 - Math.sqrt(Math.random() * 500) * 40) {
                this.isBlown = true;
                for (let i = 0; i < 60; i++) {
                    particles.push(new Particle(this.x, this.y, this.col))
                }
            }
            return this.isBlown;
        }

        draw() {
            ctx.globalAlpha = 1;
            ctx.fillStyle = this.col;
            ctx.fillRect(this.x, this.y, 2, 2);
        }
    }

    function randomCol() {
        var letter = '0123456789ABCDEF';
        var nums = [];

        for (var i = 0; i < 3; i++) {
            nums[i] = Math.floor(Math.random() * 256);
        }

        let brightest = 0;
        for (var i = 0; i < 3; i++) {
            if (brightest < nums[i]) brightest = nums[i];
        }

        brightest /= 255;
        for (var i = 0; i < 3; i++) {
            nums[i] /= brightest;
        }

        let color = "#";
        for (var i = 0; i < 3; i++) {
            color += letter[Math.floor(nums[i] / 16)];
            color += letter[Math.floor(nums[i] % 16)];
        }
        return color;
    }

    function randomVec(max: any) {
        let dir = Math.random() * Math.PI * 2;
        let spd = Math.random() * max;
        return { x: Math.cos(dir) * spd, y: Math.sin(dir) * spd };
    }

    function setSize(canv: any) {
        canv.style.width = (innerWidth) + "px";
        canv.style.height = (innerHeight) + "px";
        width = innerWidth;
        height = innerHeight;

        canv.width = innerWidth * window.devicePixelRatio;
        canv.height = innerHeight * window.devicePixelRatio;
        canvas.getContext("2d").scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function onClick(e: any) {
        fireworks.push(new Firework(e.clientX));
    }

    function windowResized() {
        setSize(canvas);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);
    }
    return (
        <>
            <Head>
                <title>Laura B-Day 🥳</title>
                <meta name="description" content="Entre todos os animais do mundo você é o mais bonito" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/laura-bday.png" />
            </Head>
            <audio autoPlay>
                <source src="musica.mp3" type="audio/mp3" />
            </audio>

            <canvas id="canvas"></canvas>
        </>
    )
}
