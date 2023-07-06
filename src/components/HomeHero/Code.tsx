import { ReactNode } from 'react';
import { CodeItem } from './styles';

interface Props {
  text: string;
  infos: Array<[string, string | number]>;
  showComments?: boolean;
  size: string;
}

function Code({
  text,
  infos = [],
  showComments = false,
  size
}: Props): ReactNode {
  return (
    <CodeItem size={size}>
      {showComments && <span className="comments">// Minha apresentação</span>}
      <span className="purple">{text} </span>
      {'{'}
      {infos.map(([key, value]) => (
        <div key={key}>
          {key}: <span className="blue">{value},</span>
        </div>
      ))}
      {'}'}
    </CodeItem>
  );
}

Code.defaultProps = {
  showComments: false
};

export default Code;
