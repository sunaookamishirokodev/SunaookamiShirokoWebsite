const introduction = document.querySelectorAll('.introduction')
const aboutMe = document.querySelectorAll('.aboutMe')
const skillPercent = document.querySelectorAll('.skillPercent')
const learningWebsite = document.querySelectorAll('.learningWebsite')
const displayOfStatus = document.getElementById('status')

  const myIntroductionSocial = {
    github: 'https://github.com/sunaookamishirokodev',
    discord: 'https://discord.com/users/962375717465763961',
    spotify: 'https://open.spotify.com/user/312qsrew377u5dombenfkfxwtbty',
    facebook: 'https://www.facebook.com/sunaookamishirokodev',
    gmail: 'mailto:sunaookamishirokodev'
  }

  const myAboutMe = {
    textOne: 'Hello, I\'m Shiroko - Newbie Developer. I\'ve only been learning coding for 4 weeks and this is my first product. So it still has a lot of error, so please feel free to comment.',
    textTwo: 'I use discord and messenger daily for communication and work so you can always interact with me through them. And I hope we can become good friends through this product.',
    textThree: 'My life is full of challenges but fortunately for me, I have found her - she always comes to me when I am happy and tries to encourage me every day to overcome the difficulties of life. So I love her so much <3.'
  }

  const mySkillPercent = {
    HTML: 60,
    CSS: 40,
    JavaScript: 10,
    Python: 2
  }

  const myLearningWebsite = {
    title: 'Learning Website',
    desc: 'Website dùng để tra tài liệu, lời giải sgk sbt,.. và là nền tảng để học online cho các bạn. Đồng thời được tích hợp trí tuệ nhân tạo và nhiều tính năng mới để hỗ trợ các bạn có thể tăng hiệu suất học tập:3 (dự tính triển khai sau tết âm lịch năm 2024)',
    status: 'pending'
}

// Khu vực thuật toán (không chỉnh sửa)
const introductionKeys = Object.keys(myIntroductionSocial)
for (let i = 0; i < introductionKeys.length; i++) {
  introduction[i].setAttribute('href', myIntroductionSocial[introductionKeys[i]])
  introduction[i].setAttribute('target', '_blank')
}

const aboutMeKeys = Object.keys(myAboutMe)
for (let i = 0; i < aboutMeKeys.length; i++) {
  aboutMe[i].textContent = myAboutMe[aboutMeKeys[i]]
}

const skillPercentKeys = Object.keys(mySkillPercent)
for (let i = 0; i < skillPercentKeys.length; i++) {
  skillPercent[i].setAttribute('style', `--process: ${mySkillPercent[skillPercentKeys[i]]}%`)
}

const learningWebsiteKeys = Object.keys(myLearningWebsite)
for (let i = 0; i < learningWebsiteKeys.length - 1; i++) {
  learningWebsite[i].textContent = myLearningWebsite[learningWebsiteKeys[i]]
}

displayOfStatus.className = `status-display--${myLearningWebsite['status']}`
displayOfStatus.textContent = myLearningWebsite['status']