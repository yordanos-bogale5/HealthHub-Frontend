import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, ViewChildren, QueryList, HostListener } from '@angular/core';

interface ConversationItem {
  id: string;
  name: string;
  text: string;
  unread: number;
  time: string;
  image: string;
}

interface Conversation {
  id: string;
  messages: Message[];
}

interface Message {
  sender: string;
  text: string;
  time: string;
  image: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl:  './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @ViewChild('sidebarProfile') sidebarProfile!: ElementRef;
  @ViewChildren('dropdown') dropdowns!: QueryList<ElementRef>;

  conversationItems: ConversationItem[] = [
    {
      id: '1',
      name: 'Someone',
      text: 'Lorem ipsum dolor sit amet consectetur.',
      unread: 5,
      time: '12:30',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: '2',
      name: 'Someone Else',
      text: 'Lorem ipsum dolor sit amet consectetur.',
      unread: 3,
      time: '11:45',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    }
  ];

  conversations: Conversation[] = [
    {
      id: '1',
      messages: [
        {
          sender: 'me',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet natus repudiandae quisquam sequi nobis suscipit consequatur rerum alias odio repellat!',
          time: '12:30',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
        },
        {
          sender: 'me',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tenetur!',
          time: '12:30',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
        }
      ]
    },
    {
      id: '2',
      messages: [
        {
          sender: 'someone',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tenetur!',
          time: '12:30',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
        }
      ]
    }
  ];

  toggleSidebar(event: Event): void {
    event.preventDefault();
    this.sidebarProfile.nativeElement.classList.toggle('active');
  }

  toggleDropdown(event: Event, dropdown: ElementRef): void {
    event.preventDefault();
    if (dropdown.nativeElement.classList.contains('active')) {
      dropdown.nativeElement.classList.remove('active');
    } else {
      this.dropdowns.forEach(d => d.nativeElement.classList.remove('active'));
      dropdown.nativeElement.classList.add('active');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!(event.target as HTMLElement).closest('.chat-sidebar-profile')) {
      this.sidebarProfile.nativeElement.classList.remove('active');
    }
    if (!(event.target as HTMLElement).closest('.conversation-item-dropdown')) {
      this.dropdowns.forEach(d => d.nativeElement.classList.remove('active'));
    }
  }

  adjustTextareaRows(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.rows = textarea.value.split('\n').length;
  }

  activateConversation(event: Event, conversationId: string): void {
    event.preventDefault();
    this.conversations.forEach(conversation => {
      document.querySelector(`[data-conversation="${conversation.id}"]`)?.classList.remove('active');
    });
    document.querySelector(`[data-conversation="${conversationId}"]`)?.classList.add('active');
  }

  goBack(event: Event): void {
    event.preventDefault();
    document.querySelector('.conversation.active')?.classList.remove('active');
    document.querySelector('.conversation-default')?.classList.add('active');
  }
}
