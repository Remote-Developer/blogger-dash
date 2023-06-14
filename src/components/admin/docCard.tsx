import { AiFillDelete } from "react-icons/ai";

interface PropsTypes {
  content?: string;
  createdAt: Date;
  meta_description: string;
  meta_keywords: string;
  meta_title: string;
  name: string;
  slug: string;
  tags?: [string];
  topic: string;
  updatedAt?: string;
  _id: string;
  __v?: string;
  handleDelete: any;
}
const DocCard: React.FC<PropsTypes> = (props) => {
  const { createdAt, topic, name, _id, handleDelete } = props;
  return (
    <div>
      <div className="flex items-center justify-between h-10 bg-red-950 text-white">
        {name?.slice(0, 30)}
        {/* {meta_title} */}
        {(createdAt as Date).toLocaleString()}
        <span className="px-2 py-1 text-white bg-yellow-700 text-sm rounded">
          {topic}
        </span>
        <button onClick={() => handleDelete(_id)}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default DocCard;
