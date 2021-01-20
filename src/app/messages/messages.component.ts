import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  // La propiedad messageService debe ser pública porque la vinculará en la plantilla (en el html)
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }
}
