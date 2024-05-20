"""change image_url back to image in posts

Revision ID: 94debfcafafc
Revises: 601016eb8b0f
Create Date: 2024-05-09 10:35:22.542756

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '94debfcafafc'
down_revision = '601016eb8b0f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('posts', schema=None) as batch_op:
        # batch_op.add_column(sa.Column('image', sa.String(length=1000), nullable=False))
        # batch_op.drop_column('image_url')
        batch_op.alter_column("image_url", new_column_name="image")

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('posts', schema=None) as batch_op:
        # batch_op.add_column(sa.Column('image_url', sa.VARCHAR(length=1000), nullable=False))
        # batch_op.drop_column('image')
        batch_op.alter_column("image", new_column_name="image_url")

    # ### end Alembic commands ###
