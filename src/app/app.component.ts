import { Component } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  githubIcons = ["https://i.ibb.co/YPnQX9J/githubdark.png", "https://i.ibb.co/JCFBG7k/githublight.png"]
  githubIcon = this.githubIcons[1]
  img_profile="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"

  links = [
    { text: "Latest Project Moodify", imgUrl: "https://play-lh.googleusercontent.com/UJuNTPS68Y4yde4LZ62IDuD0lrtDLlFVvTehd25Zbs5AoNoVeLDaaTBsyCFj_ox2", url:"https://www.moodify.it" },
    { text: "GitHub Profile", imgUrl: this.githubIcon, url:"https://github.com" },
    { text: "Discord Community", imgUrl: "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png", url:"https://discord.com" },
    { text: "I'm on Twitter!", imgUrl: "https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image", url:"https://twitter.com/?lang=es" },
  ]

  theme_mode = true
  icons = [faSun, faMoon]
  icon = this.icons[0]

  changeTheme() {
    this.theme_mode = !this.theme_mode
    this.icon = this.theme_mode? this.icons[0] : this.icons[1]
    this.githubIcon = this.theme_mode? this.githubIcons[1] : this.githubIcons[0]
    this.links[1].imgUrl=this.githubIcon
  }

}


