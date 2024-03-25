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
    by Aliasgar Fatakdawala.
      <a className="email" href="mailto:aliasgardf@gmail.com">
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




