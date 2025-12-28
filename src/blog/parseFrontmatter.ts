export interface FrontmatterResult {
  data: {
    title: string;
    date: string;
    description: string;
    tags?: string[];
  };
  content: string;
}

export function parseFrontmatter(content: string): FrontmatterResult {
  const parts = content.split(/^---$/m);

  if (parts.length < 3) {
    return { data: { title: '', date: '', description: '' }, content };
  }

  const frontmatterRaw = parts[1].trim();
  const contentBody = parts.slice(2).join('---').trim();

  const data: FrontmatterResult['data'] = {
    title: '',
    date: '',
    description: '',
  };

  const lines = frontmatterRaw.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const match = trimmed.match(/^(\w+):\s*(.*)$/);
    if (!match) continue;

    const [, key, value] = match;
    const cleanValue = value.replace(/^["']|["']$/g, '');

    if (key === 'title') {
      data.title = cleanValue;
    } else if (key === 'date') {
      data.date = cleanValue;
    } else if (key === 'description') {
      data.description = cleanValue;
    } else if (key === 'tags') {
      if (cleanValue.startsWith('[') && cleanValue.endsWith(']')) {
        const tagsContent = cleanValue.slice(1, -1);
        data.tags = tagsContent
          .split(',')
          .map(tag => tag.trim().replace(/^["']|["']$/g, ''))
          .filter(tag => tag.length > 0);
      }
    }
  }

  return { data, content: contentBody };
}
