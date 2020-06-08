from ariadne import QueryType
from ariadne.asgi import GraphQL
from ariadne.contrib.federation import FederatedObjectType, make_federated_schema

type_defs = """
  type Query {
    me: Book
  }

  type Book @key(fields: "title") {
    id: ID!
    title: String
    author: String!
  }
"""

query = QueryType()
user = FederatedObjectType("Book")


# @user.reference_resolver
# def resolve_user_reference(_, _info, representation):
#     return get_user_by_email(representation.get("email"))


schema = make_federated_schema(type_defs, [query, user])
application = GraphQL(schema)