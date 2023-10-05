import { useFetch } from './useFetch';

const Demo = () => {

    const {
      data,
      error,
      isLoading,
      refetch
    } = useFetch('https://jsonplaceholder.typicode.com/posts');
    console.log("### data : ",data)
    return (
      <div>
        <div>
          <button onClick={() => refetch({
            params: {
              _limit: 3
            }
          })}>
            Перезапросить
          </button>
        </div>
            {error && 'Произошла ошибка'}
            {isLoading && 'Загрузка...'}
            {data && data.map(item => <div key={item.id}>{item.title}</div>) }
      </div>
    );
  }

export default Demo;