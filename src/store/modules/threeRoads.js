import markdown from 'markdown-it';
import stories, { intro } from '../../gamebooks/threeRoads';

const Markdown = markdown();

const state = {
  story: 'start',
  text: Markdown.render(intro.text),
  links: intro.links,
  theEnd: false,
}

const mutations = {
  goToArticle: (state, { story, articleId }) => {
    state.story = story;
    const newStory = stories[story] || stories.start;

    console.log(story, newStory);
    const article = newStory[articleId];

    state.text = Markdown.render(article.text);
    state.links = article.links;
    state.theEnd = article.theEnd;
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
