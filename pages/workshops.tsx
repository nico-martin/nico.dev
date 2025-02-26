import { InferGetServerSidePropsType } from 'next';
import { getWorkshopsProps } from '@utils/helpers';

export const getStaticProps = async () => {
  const ws = await getWorkshopsProps();
  return {
    redirect: {
      destination: '/workshops/' + ws.props.pageData.workshops[0].slug,
    },
  };
};

export default ({}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return <p>redirect</p>;
};
