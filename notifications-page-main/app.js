fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const notificationsContainer = document.getElementById('notifications');

    // Loop through notifications and generate HTML
    data.notifications.forEach((notification, index) => {
      const notificationDiv = document.createElement('div');
      const unreadCountElement = document.getElementById('unread-count');

      notificationDiv.classList.add('notification');

      if (notification.avatar) {
        const avatarImg = document.createElement('img');
        avatarImg.src = notification.avatar;
        avatarImg.alt = 'Avatar';
        avatarImg.classList.add('avatar');
        notificationDiv.appendChild(avatarImg);
      }

      const contentDiv = document.createElement('div');
      contentDiv.innerHTML = `
        <p><strong>${getSenderName(notification)}</strong> ${getFormattedMessage(notification)}</p>
        <p>${notification.timestamp}</p>
      `;

      if (index < 3) {
        const indicatorDiv = document.createElement('div');
        indicatorDiv.classList.add('indicator');
        notificationDiv.appendChild(indicatorDiv);
        notificationDiv.classList.add('unread');
      }
      notificationDiv.appendChild(contentDiv);
      notificationsContainer.appendChild(notificationDiv);
      const unreadCount = data.notifications.filter(notification => notification.type !== 'leave' && notification.type !== 'reaction' && notification.type !== 'comment').length;
    unreadCountElement.textContent = `${unreadCount}`;
   
    });
  })
  .catch(error => console.error('Error loading JSON:', error));

// ... (your existing code)

function getFormattedMessage(notification) {
  let formattedContent = '';
  switch (notification.type) {
    case 'reaction':
      formattedContent = `reacted to your recent post <strong>My first tournament today!</strong>`;
      break;
    case 'follow':
      formattedContent = `followed you`;
      break;
    case 'join':
      formattedContent = `has joined your group <strong style="color: var(--primary-blue); font-weight: bold;">Chess Club</strong>`;
      break;
    case 'message':
      formattedContent = `sent you a private message`;
      if (notification.additionalContent) {
        formattedContent += `<br/><em>${notification.additionalContent}</em>`;
      }
      break;
    case 'comment':
      formattedContent = `commented on your picture`;
      if (notification.image) {
        const imageElement = document.createElement('img');
        imageElement.src = notification.image;
        imageElement.alt = 'Comment Image';
        imageElement.classList.add('comment-image');
        formattedContent += `<br/>`;
        formattedContent += imageElement.outerHTML;
      }
      break;
    case 'reaction':
      formattedContent = `reacted to your recent post <strong>5 end-game strategies to increase your win rate</strong>`;
      break;
    case 'leave':
      formattedContent = `left the group <strong style="color: var(--primary-blue); font-weight: bold;">Chess Club</strong>`;
      break;
    default:
      break;
  }

  return formattedContent;
}


function getSenderName(notification) {
  // Extract sender name based on the notification type
  switch (notification.type) {
    case 'reaction':
      return 'Mark Webber';
    case 'follow':
      return 'Angela Gray';
    case 'join':
      return 'Jacob Thompson';
    case 'message':
      return 'Rizky Hasanuddin';
    case 'comment':
      return 'Kimberly Smith';
    case 'reaction':
      return 'Nathan Peterson';
    case 'leave':
      return 'Anna Kim';
    default:
      return '';
  }
}

