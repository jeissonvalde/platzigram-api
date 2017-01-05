export default {
  getImage () {
    return {
      id: '6a1234234-asfa445-arta4gad',
      publicId: '2837n4092342nhuihiu3',
      userId: 'platzigram123',
      liked: false,
      likes: 0,
      src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSNNUvPIFcDcEiB1V-kFFHXr6SQxm7qadyfMctZiBLrQDzm5xfW',
      description: '#awesome',
      tags: [ 'awesome' ],
      createdAt: new Date().toString()
    }
  },

  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },

  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },

  getUser () {
    return  {
      id: '876g0sfd6gn0s-09d78fgy0s-09sdf8gy',
      name: 'Freddy Vega',
      username: 'freddier',
      email: 'f@platzi.test',
      password: 'pl4tzi.test',
      createdAt: new Date().toString()
    }
  }
}
