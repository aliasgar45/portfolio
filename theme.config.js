// eslint-disable-next-line import/no-anonymous-default-export
export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <abbr
        title="This site and all its content are licensed under a MIT License."
        style={{ cursor: 'help' }}
      >
        made w/ ♥
      </abbr>{' '}
    by Rohan Kambli.
      <a className="email" href="mailto:rohanrk39357@gmail.com">
        ඞ
      </a>
    </small>
  ),
  head: ({ meta }) => (
    <>
      {meta.description && <meta name="description" content={meta.description} />}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: '→',
  titleSuffix: null,
  postFooter: null,
  darkMode: true,
};




