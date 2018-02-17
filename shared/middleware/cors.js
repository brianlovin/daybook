// @flow
import cors from 'cors';

export default cors({
  origin:
    process.env.NODE_ENV === 'production'
      ? ['https://daybook.co', /daybook-(\w|-)+\.now\.sh/g, /daybook\.co$/]
      : [/localhost/],
  credentials: true,
});
