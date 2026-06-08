import { ReactElement } from 'react';
import { CodeItem } from './styles';

interface Props {
  text: string;
  infos: Array<[string, string | number]>;
  showComments?: boolean;
  comment?: string;
  size: string;
}

function Code({
  text,
  infos = [],
  showComments = false,
  size,
  comment = ''
}: Props): ReactElement {
  return (
    <CodeItem $size={size}>
      {showComments && <span className="comments">{comment}</span>}
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
  comment: '',
  showComments: false
};

export default Code;
