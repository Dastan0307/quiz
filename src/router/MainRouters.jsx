import { Routes, Route } from 'react-router-dom';
import Main from '../screens/Main/Main';
import AllArticlesPage from '../pages/AllArticlesPage';
import AllQuizesPage from '../pages/AllQuizesPage';
import Article from '../pages/Article';
import Quiz from '../pages/Quiz';
import QuizQuestions from '../pages/QuizQuestions';
import ResultPage from '../pages/ResultPage';

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {
            link: '/',
            element: <Main />,
            id: 1
        },
        {
            link: '/all-articles',
            element: <AllArticlesPage />,
            id: 2
        },
        {
            link: '/all-quizes',
            element: <AllQuizesPage />,
            id: 3
        },
        {
            link: '/article/:id',
            element: <Article />,
            id: 4
        },
        {
            link: '/quiz/:id',
            element: <Quiz />,
            id: 5
        },
        {
            link: '/quiz-questions',
            element: <QuizQuestions />,
            id: 6
        },
        {
            link: '/result',
            element: <ResultPage />,
            id: 7
        },
    ];

  return (
    <Routes>
        {PUBLIC_ROUTES.map(item => (
            <Route path={item.link} element={item.element} key={item.id} />
        ))}
    </Routes>
  )
}

export default MainRoutes;